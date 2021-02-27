import React, {Component} from 'react'
import {Platform, StyleSheet, View, Text, Dimensions, SafeAreaView, TouchableOpacity} from 'react-native'
import * as Animatable from 'react-native-animatable'
import { initialWindowMetrics } from 'react-native-safe-area-context';
import Draggable from 'react-native-draggable'
import {Theme} from 'rework-native'



class Alert extends Component{

    constructor(props){
        super(props)
        this.state ={
            show: false,
            message: props.message,
            width: props.width,
            height: props.height,
            type: 'info',
        }
        this.hide = this.hide.bind(this)
        this.show = this.show.bind(this)
        this.renderAlert = this.renderAlert.bind(this)

        this.hiding = false

        if(this.props.bindRef){
            console.log("bindRef")
            this.props.bindRef(this)
        }

        this.Themes = {
            info: {
                alert: {
                    borderColor: Theme.colors.background,
                    backgroundColor: Theme.colors.background,
                },
                text: {
                    color: Theme.colors.text,
                }
            },
            success: {
                alert: {
                    borderColor: Theme.colors.background,
                    backgroundColor: Theme.colors.background,
                },
                text: {
                    color: Theme.colors.success,
                }
            },
            error: {
                alert: {
                    borderColor: Theme.colors.background,
                    backgroundColor: Theme.colors.background,
                },
                text: {
                    color: Theme.colors.error,
                }
            },
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
        updateProps = {}
        if(nextProps.width !== prevState.width){
            updateProps.width = nextProps.width
        }
        if(nextProps.height !== prevState.height){
            updateProps.height = nextProps.height
        }
        return Object.keys(updateProps).length ? updateProps : null;
    }

    render(){
        if(this.state.show){
            return(
                <SafeAreaView style={styles.safeview} ref={(ref) => {this.safeview = ref}}>
                    <View style={[styles.container, {width: this.state.width, height: this.state.height}]}>
                        <Animatable.View
                            style={[styles.animatable, {width: this.state.width, height: this.state.height}]}
                            ref={(ref) => {this.animatable = ref}}>
                            <Draggable
                                maxY={this.state.height}
                                x={0}
                                minX={0}
                                maxX={0}
                                shouldReverse={!this.hiding}
                                onDragRelease={(event, gestureState) => this.onDragRelease(event, gestureState)}
                                onShortPressRelease={(event) => this.props.onPress()}
                                touchableOpacityProps={{activeOpacity:1}}>
                                <View style={[
                                    {width: this.state.width, height: this.state.height},
                                    Theme.styles.flexColumn,
                                    Theme.styles.justifyCenter,
                                    Theme.styles.alignCenter
                                ]}>
                                    {this.renderAlert()}
                                </View>
                            </Draggable>
                        </Animatable.View>
                    </View>
                </SafeAreaView>
            )
        }else return null
    }

    renderAlert(){
        return(
            <View style={[
                styles.alert,
                this.Themes[this.state.type].alert,
                Theme.styles.alert,
                {width: this.state.width * 0.95, height: this.state.height * 0.85},
                Theme.styles.paddingVertical1,
                Theme.styles.paddingHorizontal2,
                Theme.styles.flexRow,
                Theme.styles.justifyCenter,
                Theme.styles.alignCenter,
            ]}>
                <Text style={[styles.message, this.Themes[this.state.type].text]}>{this.state.message}</Text>
            </View>
        )
    }

    onDragRelease(event, gestureState){
        if(gestureState.dy < this.state.height * -0.2){
            this.hiding = true
            this.hide()
        }
    }

    animateAlert(){

    }

    show(message, type){
        this.setState({
            message: message,
            type: type,
            show: true
        },() => {
            this.animatable.animate({
                0: {
                    top: -(initialWindowMetrics.insets.top + this.state.height),
                },
                1: {
                    top: 0,
                }
            }, 400)
        })
    }

    hide(){
        this.animatable.animate({
            0: {
                top: 0,
            },
            1: {
                top: -(initialWindowMetrics.insets.top + this.state.height),
            }
        }, 300)
        .then(() => this.setState({show: false}))
        .then(() => {
            this.hiding = false
        })
    }

}



const styles = StyleSheet.create({
    safeview: {
        width: Dimensions.get('window').width,
        position: 'absolute',
        top: 0,
    },
    container: {
        position: 'relative',
    },
    animatable: {
        position: 'absolute',
        top: 0,
    },
    alert: {
        borderRadius: Dimensions.get('window').width * 0.01,
        borderWidth: Dimensions.get('window').width * 0.006,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: Dimensions.get('window').width * 0.008 },
        shadowOpacity: 0.2,
        shadowRadius: Dimensions.get('window').width * 0.01,
        elevation: 2,
    },
    message: {
        fontFamily: Theme.fonts.Primary,
        fontSize: Dimensions.get('window').width * 0.04,
        lineHeight: Dimensions.get('window').width * 0.045,
        fontWeight: '500',
        textAlign: "left",
    }
})
Alert.defaultProps = {
    message: '',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 0.18,
};
export default Alert;

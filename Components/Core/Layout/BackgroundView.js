import React, {Component} from 'react';
import {Platform, StyleSheet, View, Dimensions, Image} from 'react-native';
import {Theme} from 'rework'

class BackgroundView extends Component{

    constructor(props){
        super(props)
        this.state ={
            source: props.source,
            resizeMode: props.resizeMode,
            width: props.width,
            height: props.height,
            overlayColor: props.overlayColor,
            overlayOpacity: props.overlayOpacity,
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
        updateProps = {}
        if(nextProps.source !== prevState.source){
            updateProps.source = nextProps.source
        }
        if(nextProps.resizeMode !== prevState.resizeMode){
            updateProps.resizeMode = nextProps.resizeMode
        }
        if(nextProps.width !== prevState.width){
            updateProps.width = nextProps.width
        }
        if(nextProps.height !== prevState.height){
            updateProps.height = nextProps.height
        }
        if(nextProps.overlayColor !== prevState.overlayColor){
            updateProps.overlayColor = nextProps.overlayColor
        }
        if(nextProps.overlayOpacity !== prevState.overlayOpacity){
            updateProps.overlayOpacity = nextProps.overlayOpacity
        }
        return Object.keys(updateProps).length ? updateProps : null;
    }

    render(){
        const { style, width, height, source, resizeMode, ...props } = this.props;
        return(
            <View style={[styles.container, {width: width, height: height}]}>
                <Image
                    source={source}
                    resizeMode={resizeMode}
                    style={[this.props.imageStyle, styles.image]}
                />
                {this.renderOverlay()}
                <View style={[Theme.styles.backgroundView, this.props.viewStyle, styles.view]} {...props}>{this.props.children}</View>
            </View>
        )
    }

    renderOverlay(){
        if(this.state.overlayColor != null){
            return (
                <View style={[styles.overlay, {
                    backgroundColor: this.state.overlayColor,
                    opacity: this.state.overlayOpacity,
                }]}></View>
            )
        }else return null
    }

}

const styles = StyleSheet.create({
    container: {

    },
    view: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 3
    },
    overlay: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 2
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 1
    },
})

BackgroundView.defaultProps = {
    width: 'auto',
    height: 'auto',
    overlayColor: null,
    overlayOpacity: 0.5,
};

export default BackgroundView;

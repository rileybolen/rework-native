import React, {Component} from 'react';
import {Platform, StyleSheet, Dimension, View, TouchableOpacity, Dimensions} from 'react-native';
import Svg, {G, Path} from 'react-native-svg';
import {Paragraph, Theme} from 'rework'

class CheckBox extends Component{

    constructor(props){
        super(props)

        this.state ={
            checked: props.checked,
        }
        this.renderLabel = this.renderLabel.bind(this)
        this.renderCheckbox = this.renderCheckbox.bind(this)
        this.renderTouchableOpacity = this.renderTouchableOpacity.bind(this)
    }

    static getDerivedStateFromProps(nextProps, prevState){
        updateProps = {}
        if(nextProps.checked !== prevState.checked){
            updateProps.checked = nextProps.checked
        }
        return Object.keys(updateProps).length ? updateProps : null;
    }

    render(){
        const { style, onValueChange, checked, children, ...props } = this.props;
        return this.renderTouchableOpacity(this.renderCheckbox(), this.renderLabel())
    }

    renderTouchableOpacity(checkbox, label){
        return(
            <TouchableOpacity onPress={() => this.props.onValueChange(!this.state.checked)}
                style={[Theme.styles.flexRow, Theme.styles.justifyStart, Theme.styles.alignCenter, Theme.styles.marginRight2, Theme.styles.checkboxTouchableOpacity, this.props.touchableOpacityStyle]}
                activeOpacity={1}>
                {checkbox}
                {label}
            </TouchableOpacity>
        )
    }

    renderLabel(){
        return(
            <Paragraph textStyle={[Theme.styles.paddingLeft1, Theme.styles.checkboxLabel, this.props.labelStyle]}>{this.props.children}</Paragraph>
        )
    }

    renderCheckbox(){
        return(
            <View style={[styles.checkbox, Theme.styles.checkbox, this.state.checked ? styles.checked : null]}>
            {this.state.checked &&
                <Svg width="80%" height="80%" viewBox="0 0 426.667 426.667" >
                    <G>
                        <G>
                            <Path fill={Theme.colors.backgroundAccent} d="M421.876,56.307c-6.548-6.78-17.352-6.968-24.132-0.42c-0.142,0.137-0.282,0.277-0.42,0.42L119.257,334.375
                              l-90.334-90.334c-6.78-6.548-17.584-6.36-24.132,0.42c-6.388,6.614-6.388,17.099,0,23.713l102.4,102.4
                              c6.665,6.663,17.468,6.663,24.132,0L421.456,80.44C428.236,73.891,428.424,63.087,421.876,56.307z"/>
                        </G>
                    </G>
                </Svg>
            }
            </View>
        )
    }

}

const styles = StyleSheet.create({
    checkbox: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: Dimensions.get('window').width * 0.055,
      height: Dimensions.get('window').width * 0.055,
      borderRadius: Dimensions.get('window').width * 0.01,
      borderWidth: Dimensions.get('window').width * 0.003,
      borderColor: Theme.colors.backgroundAccent,
    },
    checked: {
      backgroundColor: Theme.colors.primaryButton,
      borderColor: Theme.colors.primaryButton,
    }
})

CheckBox.defaultProps = {

};

export default CheckBox;

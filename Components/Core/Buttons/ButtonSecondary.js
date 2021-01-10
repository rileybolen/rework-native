import React, {Component} from 'react';
import {StyleSheet, Text, Dimensions, TouchableOpacity} from 'react-native';
import {Theme} from 'rework'

class ButtonSecondary extends Component{

    constructor(props){
        super(props)

        this.state ={
            text: props.text,
            size: props.size,
            disabled: props.disabled
        }
        this.getWidth = this.getWidth.bind(this)
    }

    render(){
        return this.renderTouchableOpacity(
            this.renderText()
        )
    }

    renderTouchableOpacity(text){
        return(
            <TouchableOpacity
                onPress={() => {!this.state.disabled ? this.props.onPress() : null}}
                style={[
                styles.touchableOpacity, this.getWidth(), Theme.styles.buttonSecondaryTouchableOpacity, this.props.touchableOpacityStyle,
                this.state.disabled ? {opacity: 0.6} : null
                ]} title={this.props.title} activeOpacity={this.state.disabled ? 0.6 : 0.8}
            >
                {text}
            </TouchableOpacity>
        )
    }

    renderText(){
        return(
            <Text style={[styles.text, Theme.styles.buttonSecondaryText, this.props.textStyle,
              this.state.disabled ? {opacity: 0.6} : null
            ]}>{this.props.children}</Text>
        )
    }

    getWidth(){
        if(this.state.size == "fit"){
            return {width: 'auto', alignSelf: 'center'}
        }else if(this.state.size == "fill"){
            return {width: '100%'}
        }else{
            return {width: this.state.size}
        }
    }

}

const styles = StyleSheet.create({
    touchableOpacity: {
        paddingHorizontal: Dimensions.get('window').width * 0.05,
        paddingVertical: Dimensions.get('window').height * 0.025,
        borderRadius: Dimensions.get('window').width * 0.01,
        borderWidth: Dimensions.get('window').width * 0.006,
        borderColor: Theme.colors.secondaryButton,
        backgroundColor: Theme.colors.secondaryButton,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: Dimensions.get('window').width * 0.002 },
        shadowOpacity: 0.2,
        shadowRadius: Dimensions.get('window').width * 0.005,
        elevation: 2
    },
    text: {
        fontFamily: Theme.fonts.Primary,
        fontSize: Dimensions.get('window').width * 0.04,
        lineHeight: Dimensions.get('window').width * 0.04,
        fontWeight: '600',
        textAlign: "center",
        color: Theme.colors.text,
    },
})

ButtonSecondary.defaultProps = {
    size: "fit",
    disabled: false,
};

export default ButtonSecondary;

import React, {Component} from 'react';
import {StyleSheet, Text, Dimensions, TouchableOpacity} from 'react-native';
import {Paragraph, Theme} from 'rework'

class Link extends Component{

    constructor(props){
        super(props)

        this.state ={
            disabled: props.disabled
        }
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
                Theme.styles.linkTouchableOpacity,
                this.props.touchableOpacityStyle,
                this.state.disabled ? {opacity: 0.6} : null
                ]} title={this.props.title} activeOpacity={this.state.disabled ? 0.6 : 0.8}
            >
                {text}
            </TouchableOpacity>
        )
    }

    renderText(){
        return(
            <Paragraph textStyle={[
                styles.text, Theme.styles.linkText,
                this.props.textStyle,
                this.state.disabled ? {opacity: 0.6} : null
            ]}>{this.props.children}</Paragraph>
        )
    }

}

const styles = StyleSheet.create({
    text: {
        textDecorationLine: 'underline'
    },
})

Link.defaultProps = {
    disabled: false,
};

export default Link;

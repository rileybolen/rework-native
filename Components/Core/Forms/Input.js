import React, {Component} from 'react';
import {Platform, StyleSheet, Dimensions, TextInput} from 'react-native';
import {Theme} from 'rework-native'

class Input extends Component{

    constructor(props){
        super(props)

        this.state ={
            text: props.text,
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
        updateProps = {}
        if(nextProps.text !== prevState.text){
            updateProps.text = nextProps.text
        }
        return Object.keys(updateProps).length ? updateProps : null;
    }

    render(){
        const { style, onChangeText, text, ...props } = this.props;
        return this.renderTextInput(props)
    }

    renderTextInput(props){
        return(
            <TextInput
                value={this.state.text}
                style={[Theme.styles.fullWidth, styles.textInput, this.props.textInputStyle, Theme.styles.input]}
                onChangeText={(text) => {
                  this.props.onChangeText(text)
                }}
                placeholderTextColor={Theme.colors.text}
                {...props}
                />
        )
    }

}

const styles = StyleSheet.create({
    textInput: {
        paddingHorizontal: Dimensions.get('window').width * 0.02,
        paddingVertical: Dimensions.get('window').height * 0.015,
        borderRadius: Dimensions.get('window').width * 0.01,
        borderWidth: Dimensions.get('window').width * 0.003,
        borderColor: Theme.colors.backgroundAccent,
        fontFamily: Theme.fonts.Primary,
        fontSize: Dimensions.get('window').width * 0.04,
        fontWeight: '400',
        color: Theme.colors.text,
    },
})

Input.defaultProps = {

};

export default Input;

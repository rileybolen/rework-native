import React, {Component} from 'react';
import {Platform, StyleSheet, Dimensions, TextInput} from 'react-native';
import {Theme} from 'rework-native'

class TextArea extends Component{

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
        const { style, onChangeText, text, multiline, ...props } = this.props;
        return(
            <TextInput
                style={[Theme.styles.fullWidth, styles.textInput, Theme.styles.textAreaInput, this.props.textInputStyle]}
                onChangeText={(text) => {
                  this.props.onChangeText(text)
                }}
                placeholderTextColor={Theme.colors.text}
                multiline={true}
                numberOfLines={4}
                minHeight={(styles.textInput.lineHeight * 5)}
                {...props}
                />
        )
    }

}

const styles = StyleSheet.create({
    textInput: {
        paddingHorizontal: Dimensions.get('window').width * 0.02,
        paddingTop: Dimensions.get('window').height * 0.015,
        paddingBottom: Dimensions.get('window').height * 0.015,
        borderRadius: Dimensions.get('window').width * 0.01,
        borderWidth: Dimensions.get('window').width * 0.003,
        borderColor: Theme.colors.backgroundAccent,
        fontFamily: Theme.fonts.Primary,
        fontSize: Dimensions.get('window').width * 0.04,
        lineHeight: Dimensions.get('window').width * 0.05,
        fontWeight: '400',
        color: Theme.colors.text,
    },
})

TextArea.defaultProps = {

};

export default TextArea;

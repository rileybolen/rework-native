import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions} from 'react-native';
import {Theme} from 'rework-native'

class SubheadingLg extends Component{

    constructor(props){
        super(props)

        this.state ={
            text: props.text,
        }
    }

    render(){
        return(
            <Text style={[styles.text, Theme.styles.subheadingLgText, this.props.textStyle]}>{this.props.children}</Text>
        )
    }

}

const styles = StyleSheet.create({
    text: {
        fontFamily: Theme.fonts.Primary,
        fontSize: Dimensions.get('window').width * 0.05,
        lineHeight: Dimensions.get('window').width * 0.058,
        fontWeight: '400',
        textAlign: "left",
        color: Theme.colors.text,
    },
})

export default SubheadingLg;

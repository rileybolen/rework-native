import React, {Component} from 'react';
import {Platform, StyleSheet, View, Dimensions} from 'react-native';
import {Fonts} from 'config'
import {Theme} from 'rework'

class Divider extends Component{

    constructor(props){
        super(props)
        this.state ={

        }
    }

    render(){
        return(
            <View style={[styles.divider, Theme.styles.divider, this.props.viewStyle]}></View>
        )
    }

}

const styles = StyleSheet.create({
    divider: {
        width: '100%',
        borderBottomWidth: Dimensions.get('window').width * 0.003,
        borderBottomColor: Theme.colors.backgroundAccent,
    },
})

export default Divider;

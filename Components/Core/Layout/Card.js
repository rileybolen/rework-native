import React, {Component} from 'react';
import {Platform, StyleSheet, View, Dimensions} from 'react-native';
import {Theme} from 'rework-native'

class Card extends Component{

    constructor(props){
        super(props)
        this.state ={

        }
    }

    render(){
        return(
            <View style={[styles.card, Theme.styles.padding2, Theme.styles.card, this.props.viewStyle]}>{this.props.children}</View>
        )
    }

}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        borderRadius: Dimensions.get('window').width * 0.01,
        borderWidth: Dimensions.get('window').width * 0.006,
        borderColor: Theme.colors.background,
        backgroundColor: Theme.colors.background,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: Dimensions.get('window').width * 0.008 },
        shadowOpacity: 0.2,
        shadowRadius: Dimensions.get('window').width * 0.01,
        elevation: 2,
    },
})

export default Card;

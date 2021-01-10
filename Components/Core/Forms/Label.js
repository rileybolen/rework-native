import React, {Component} from 'react';
import {Platform, StyleSheet, Dimensions} from 'react-native';
import {Paragraph, Theme} from 'rework-native'

class Label extends Component{

    constructor(props){
        super(props)
        this.state ={

        }
    }

    render(){
        return(
          <Paragraph textStyle={[this.props.textStyle, Theme.styles.labelText]}>{this.props.children}</Paragraph>
        )
    }

}

Label.defaultProps = {

};

export default Label;

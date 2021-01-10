import React, {Component} from 'react';
import {Platform, StyleSheet, View, Dimensions, LayoutAnimation} from 'react-native';
import {Theme} from 'rework'

class StageView extends Component{

    constructor(props){
        super(props)
        this.state ={
            stage: 0,
            transition: props.transition,
        }
    }

    render(){
        if(this.props.children){
            return this.props.children[this.state.stage]
        }else return null
    }

    next(){
        if(this.state.stage + 1 < this.props.children.length){
            if (Platform.OS === 'android') {
                LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)
            }else{
                LayoutAnimation.configureNext(this.state.transition)
            }
            this.setState({
                stage: this.state.stage + 1
            })
        }
    }

    previous(){
        if(this.state.stage > 0){
            if (Platform.OS === 'android') {
                LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)
            }else{
                LayoutAnimation.configureNext(this.state.transition)
            }
            this.setState({
                stage: this.state.stage - 1
            })
        }
    }

    first(){
        if (Platform.OS === 'android') {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)
        }else{
            LayoutAnimation.configureNext(this.state.transition)
        }
        this.setState({
            stage: 0
        })
    }

    last(){
        if (Platform.OS === 'android') {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)
        }else{
            LayoutAnimation.configureNext(this.state.transition)
        }
        this.setState({
            stage: this.props.children.length
        })
    }

}

StageView.defaultProps = {
    transition: {
        create: {
          property: LayoutAnimation.Properties.opacity,
          type: LayoutAnimation.Types.easeOut,
          duration: 200,
        },
        delete: {
          property: LayoutAnimation.Properties.opacity,
          type: LayoutAnimation.Types.easeIn,
          duration: 200,
        },
    }
};

export default StageView;

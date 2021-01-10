import React, {Component} from 'react';
import {Platform, StyleSheet, View, Dimensions, ActivityIndicator} from 'react-native';
import {Theme} from 'rework'

class LoadingView extends Component{

    constructor(props){
        super(props)
        this.state ={
          loading: props.loading,
          width: 0,
          height: 0,
          activityIndicatorColor: props.activityIndicatorColor,
          activityIndicatorSize: props.activityIndicatorSize,
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
        updateProps = {}
        if(nextProps.activityIndicatorColor !== prevState.activityIndicatorColor){
            updateProps.activityIndicatorColor = nextProps.activityIndicatorColor
        }
        return Object.keys(updateProps).length ? updateProps : null;
    }

    render(){
        if(this.state.loading){
            return(
                <View style={[
                    Theme.styles.flexColumn,
                    Theme.styles.justifyCenter,
                    Theme.styles.alignCenter,
                    {
                        width: this.state.width,
                        height: this.state.height,
                    },
                    this.props.activityIndicatorContainerStyle
                ]}>
                    <ActivityIndicator
                        color={this.state.activityIndicatorColor}
                        size={this.state.activityIndicatorSize}
                    />
                </View>
            )
        }else{
            return(
                <View onLayout={(event) => {
                  event.nativeEvent.layout
                  this.setState({
                      width: event.nativeEvent.layout.width,
                      height: event.nativeEvent.layout.height,
                  })
                }}
                style={[Theme.styles.loadingView, this.props.viewStyle]}>{this.props.children}</View>
            )
        }
    }

    startLoading(){
        this.setState({
            loading: true
        })
    }

    endLoading(){
        this.setState({
            loading: false
        })
    }

}

LoadingView.defaultProps = {
    activityIndicatorColor: Theme.colors.activityIndicatorColor,
    activityIndicatorSize: 'large',
    loading: false,
};

export default LoadingView;

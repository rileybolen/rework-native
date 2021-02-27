import React, {Component} from 'react';
import {Platform, StyleSheet, Dimensions, View, Image} from 'react-native';
import Svg, {G, Path} from 'react-native-svg';
import RNPickerSelect from 'react-native-picker-select';
import {Theme} from 'rework-native'

class Select extends Component{

    constructor(props){
        super(props)

        this.state ={
            value: props.value,
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
        updateProps = {}
        if(nextProps.value !== prevState.value){
            updateProps.value = nextProps.value
        }
        return Object.keys(updateProps).length ? updateProps : null;
    }

    render(){
        const { style, onValueChange, ...props } = this.props;
        return(
            <RNPickerSelect
                onValueChange={(newValue) => this.props.onValueChange(newValue)}
                useNativeAndroidPickerStyle={false}
                placeholder={{
                  label: "Select",
                  value: null
                }}
                style={Select.styles}
                Icon={() => {
                  return (
                      <Svg width="80%" height="80%" viewBox="0 0 426.667 426.667" >
                          <G>
                          	<Path fill={Theme.colors.backgroundAccent} d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
                          		c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
                          		c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"/>
                          </G>
                          <G>
                          </G>
                          <G>
                          </G>
                          <G>
                          </G>
                          <G>
                          </G>
                          <G>
                          </G>
                          <G>
                          </G>
                          <G>
                          </G>
                          <G>
                          </G>
                          <G>
                          </G>
                          <G>
                          </G>
                          <G>
                          </G>
                          <G>
                          </G>
                          <G>
                          </G>
                          <G>
                          </G>
                          <G>
                          </G>
                      </Svg>
                  );
                }}
                {...props}
            />
        )
    }

    static styles = StyleSheet.create({
        inputIOS: {
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
        inputAndroid: {
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
        placeholder: {
            color: Theme.colors.text,
        },
        iconContainer: {
            top: Dimensions.get('window').height * 0.022,
            right: Dimensions.get('window').width * 0.015,
            width: Dimensions.get('window').width * 0.04,
            height: Dimensions.get('window').width * 0.04
        },
    })

}

Select.defaultProps = {

};

export default Select;

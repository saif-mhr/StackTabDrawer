import React, { Component } from 'react';
import{
View,
Text,
Button,
}from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from './src/home';
import Setting from './src/setting';

class App extends Component{
  render(){
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:40}}>Tab Navigation</Text>
    
      </View>
    )
  }
}

const AppNavigator=createBottomTabNavigator({
  Home:{
    screen:App,
  },
  About:{
screen:Home
  },
  Setting:{
    screen:Setting
  }

});

export default createAppContainer(AppNavigator);
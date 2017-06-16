import React, { Component } from "react";

import { Image } from "react-native";

import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import {
  Store,
  Devices,
} from "./index";

const IndexPage = TabNavigator({
  Store: {
    screen: Store,
    navigationOptions: {
      tabBarLabel: '店铺',
      tabBarIcon: ({ focused, tintColor })=> (
        <Image
          source={require('../static/img/common_tab_store_s.png')}
          style={{height: 20, width: 20, tintColor: focused ? '#3EADF3' : '#999'}} />
      ),
    }
  },
  Devices: {
    screen: Devices,
    navigationOptions: {
      tabBarLabel: '设备',
      tabBarIcon: ({ focused, tintColor })=> (
        <Image
          source={require('../static/img/common_tab_device_s.png')} style={{height: 20, width: 20}}
          style={{height: 20, width: 20, tintColor: focused ? '#3EADF3' : '#999'}}/>
      ),
    }
  }
}, {
  tabBarComponent:TabBarBottom,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  lazy: true,
  showIcon: false,
  tabBarOptions: {
     activeTintColor: '#3EADF3',
     inactiveTintColor: '#999',
  },
  labelStyle: {
    indicatorStyle: {
      height: 0,
    },
    labelStyle: {
      fontSize: 32
    }
  }
})

export default IndexPage;
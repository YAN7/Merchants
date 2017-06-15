import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import { TabBarItem } from "./components";
import {
  HomePage,
  Equipment,
  Test
} from "./views";

const IndexPage = TabNavigator({
  HomePage: {
    screen: HomePage,

    navigationOptions: {
      tabBarLabel: '店铺',
      tabBarIcon: ({ focused, tintColor })=> (
        <Image
          source={require('./static/img/common_tab_store_s.png')}
          style={{height: 20, width: 20, tintColor: focused ? '#3EADF3' : '#999'}} />
      ),
    }
  },
  Equipment: {
    screen: Equipment,
    navigationOptions: {
      tabBarLabel: '设备',
      tabBarIcon: ({ focused, tintColor })=> (
        <Image
          source={require('./static/img/common_tab_device_s.png')} style={{height: 20, width: 20}}
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
  // initialRouteName: 'Equipment',
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

const YmlMerchants = StackNavigator({
  IndexPage: { screen: IndexPage },
  Test: { screen: Test },
}, {
  navigationOptions: {
    header: null
  }
})

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('YmlMerchants', () => YmlMerchants);

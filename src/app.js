import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import {
  HomePage,
  Equipment
} from "./views";

const IndexPage = TabNavigator({
  HomePage: {
    screen: HomePage,

    navigationOptions: {
      tabBarLabel: '店铺',
      tabBarIcon: ()=> (
        <Image source={require('./static/img/common_tab_store_s.png')} style={{height: 25, width: 25}} />
      ),
    }
  },
  Equipment: {
    screen: Equipment,

    navigationOptions: {
      tabBarLabel: '设备',
      tabBarIcon: ()=> (
        <Image source={require('./static/img/common_tab_device_s.png')} style={{height: 25, width: 25}} />
      ),
    }
  }
}, {
  tabBarComponent:TabBarBottom,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  lazy: true,
  showIcon: true,
  labelStyle: {
    indicatorStyle: {
      height: 0,
    }
  }
})

const YmlMerchants = StackNavigator({
  IndexPage: {
    screen: IndexPage,
  },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('YmlMerchants', () => YmlMerchants);

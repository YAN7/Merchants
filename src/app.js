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
  Store,
  Equipment,
  Test,
  OrderManager,
  IndexPage,
} from "./views";
import { BORDER_COLOR } from "../globalconfig";

const YmlMerchants = StackNavigator({
  IndexPage: {
    screen: IndexPage,
    navigationOptions: {
      header: null,
    }
  },
  OrderManager: {
    screen: OrderManager,
    headerTintColor: 'red',
    navigationOptions: {
      title: "订单管理",
    }
  },
  Test: { screen: Test },
}, {
  initialRouteName: "OrderManager",
  navigationOptions: {
    gesturesEnabled: true,
    headerStyle: {
      height: 44,
      elevation: 0,
      shadowColor: 'transparent',
      borderColor: BORDER_COLOR,
      borderBottomWidth: 1,
      // borderBottomStyle: 'solid',
    },
    headerTitleStyle: {
      textAlign: 'center',
      fontWeight: '100',
    }
  }
})

AppRegistry.registerComponent('YmlMerchants', () => YmlMerchants);

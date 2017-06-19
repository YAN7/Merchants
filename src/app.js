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
  DevicesData,
  OrderDetail,
  CustomerManager,
  CustomDetail,
  Settings,
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
  DevicesData: {screen: DevicesData},
  OrderDetail: {screen: OrderDetail},
  CustomerManager: {screen: CustomerManager},
  CustomDetail: {screen: CustomDetail},
  Settings: {screen: Settings},
  Test: { screen: Test },
}, {
  initialRouteName: "Settings",
  navigationOptions: {
    gesturesEnabled: true,
    headerStyle: {
      height: 44,
      elevation: 0,
      shadowColor: 'transparent',
      borderColor: BORDER_COLOR,
      borderBottomWidth: 1,
    }
  }
})

AppRegistry.registerComponent('YmlMerchants', () => YmlMerchants);

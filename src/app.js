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
  ValiPassword,
  FindPassword,
  MyDevices,
  Login,
  MessageCenter,
  Balance,
  Recharge,
  RechargeSuccess,
  ServiceRecord,
  AssistantManager,
  AddAssistant,
} from "./views";
import { BORDER_COLOR } from "../globalconfig";

const YmlMerchants = StackNavigator({
  IndexPage: {screen: IndexPage,},
  OrderManager: {screen: OrderManager,},
  DevicesData: {screen: DevicesData},
  OrderDetail: {screen: OrderDetail},
  CustomerManager: {screen: CustomerManager},
  CustomDetail: {screen: CustomDetail},
  Settings: {screen: Settings},
  ValiPassword: {screen: ValiPassword},
  FindPassword: {screen: FindPassword},
  MyDevices: {screen: MyDevices},
  Login: {screen: Login },
  MessageCenter: {screen: MessageCenter},
  Balance: {screen: Balance},
  Recharge: {screen: Recharge},
  RechargeSuccess: {screen: RechargeSuccess},
  ServiceRecord: {screen: ServiceRecord},
  AssistantManager: {screen: AssistantManager},
  AddAssistant: {screen: AddAssistant},
}, {
  initialRouteName: 'AssistantManager',
  navigationOptions: {
    gesturesEnabled: true,
    headerTitleStyle: {
      fontWeight: '100',
    },
    headerStyle: {
      // height: 44,
      elevation: 0,
      shadowColor: 'transparent',
      borderColor: BORDER_COLOR,
      borderBottomWidth: 1,
    }
  }
})

AppRegistry.registerComponent('YmlMerchants', () => YmlMerchants);

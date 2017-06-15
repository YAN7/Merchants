import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ListView,
  StyleSheet,
} from "react-native";
import { TabNavigator, TabBarBottom } from "react-navigation";

import { APP_COLOR } from "../../../globalconfig";

const _renderList = ()=> (
  <Text>123</Text>
)

const TabA = ()=> (
  <Text>tabA</Text>
)
const TabB = ()=> (
  <Text>tabB</Text>
)
const TabC = ()=> (
  <Text>tabC</Text>
)
const TabD = ()=> (
  <Text>tabD</Text>
)

const OrderManager = TabNavigator({
  tabA: {
    screen: TabA,
    navigationOptions: {
      tabBarLabel: "待服务",
    }
  },
  tabB: {
    screen: TabB,
    navigationOptions: {
      tabBarLabel: '服务中',
    }
  },
  tabC: {
    screen: TabC,
    navigationOptions: {
      tabBarLabel: "服务完成",
    }
  },
  tabD: {
    screen: TabD,
    navigationOptions: {
      tabBarLabel: '退款/售后',
    }
  },
}, {
  tabBarPosition: 'top',
  tabBarOptions: {
    activeTintColor: APP_COLOR,
    inactiveTintColor: '#4a4a4a',
    indicatorStyle: {
      backgroundColor: APP_COLOR,
      width: 60,
      marginLeft: 20,
      alignSelf: 'center',
    },
    style: {
      backgroundColor: '#fff',
    },
    tabStyle: {
    }
  },
  navigationOptions: {
  }
})

const styles = StyleSheet.create({

})

export default OrderManager;

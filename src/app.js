import React, { Component } from "react";
import { AppRegistry } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import {
  Test,
  Store,
  Login,
  Balance,
  Recharge,
  Settings,
  IndexPage,
  MyDevices,
  Equipment,
  BillDetail,
  DevicesData,
  OrderDetail,
  AddAssistant,
  OrderManager,
  CustomDetail,
  ValiPassword,
  FindPassword,
  MessageCenter,
  ServiceRecord,
  RechargeSuccess,
  CustomerManager,
  AssistantManager,
  EditCustomerRemark,
  DevicesInstructionList,
} from "./views";
import { BORDER_COLOR } from "../globalconfig";

const YmlMerchants = StackNavigator({
  Test:                   {screen: Test},
  Login:                  {screen: Login },
  Balance:                {screen: Balance},
  Settings:               {screen: Settings},
  Recharge:               {screen: Recharge},
  MyDevices:              {screen: MyDevices},
  IndexPage:              {screen: IndexPage,},
  BillDetail:             {screen: BillDetail},
  DevicesData:            {screen: DevicesData},
  OrderDetail:            {screen: OrderDetail},
  CustomDetail:           {screen: CustomDetail},
  ValiPassword:           {screen: ValiPassword},
  AddAssistant:           {screen: AddAssistant},
  FindPassword:           {screen: FindPassword},
  OrderManager:           {screen: OrderManager,},
  MessageCenter:          {screen: MessageCenter},
  ServiceRecord:          {screen: ServiceRecord},
  RechargeSuccess:        {screen: RechargeSuccess},
  CustomerManager:        {screen: CustomerManager},
  AssistantManager:       {screen: AssistantManager},
  EditCustomerRemark:     {screen: EditCustomerRemark},
  DevicesInstructionList: {screen: DevicesInstructionList},
}, {
  initialRouteName: 'IndexPage',
  navigationOptions: {
    gesturesEnabled: true,
    headerTitleStyle: { fontWeight: '100' },
    headerStyle: {
      elevation: 0,
      shadowColor: 'transparent',
      borderColor: BORDER_COLOR,
      borderBottomWidth: 1,
    }
  }
})

AppRegistry.registerComponent('YmlMerchants', () => YmlMerchants);

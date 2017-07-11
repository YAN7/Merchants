import React, { Component } from "react";
import { AppRegistry } from 'react-native';
import { connect } from "react-redux";
import { StackNavigator, addNavigationHelpers } from 'react-navigation';

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
  AddNewDevices,
  DevicesDetail,
  RechargeSuccess,
  CustomerManager,
  AssistantManager,
  EditCustomerRemark,
  OperationInstruction,
  DevicesInstructionList,
} from "./views";
import { BORDER_COLOR } from "./globalconfig";

const App = StackNavigator({
  Test:                   { screen: Test },
  Login:                  { screen: Login },
  Balance:                { screen: Balance },
  Settings:               { screen: Settings },
  Recharge:               { screen: Recharge },
  MyDevices:              { screen: MyDevices },
  IndexPage:              { screen: IndexPage },
  BillDetail:             { screen: BillDetail },
  DevicesData:            { screen: DevicesData },
  OrderDetail:            { screen: OrderDetail },
  CustomDetail:           { screen: CustomDetail },
  ValiPassword:           { screen: ValiPassword },
  AddAssistant:           { screen: AddAssistant },
  FindPassword:           { screen: FindPassword },
  OrderManager:           { screen: OrderManager },
  DevicesDetail:          { screen: DevicesDetail },
  MessageCenter:          { screen: MessageCenter },
  ServiceRecord:          { screen: ServiceRecord },
  AddNewDevices:          { screen: AddNewDevices },
  RechargeSuccess:        { screen: RechargeSuccess },
  CustomerManager:        { screen: CustomerManager },
  AssistantManager:       { screen: AssistantManager },
  EditCustomerRemark:     { screen: EditCustomerRemark },
  OperationInstruction:   { screen: OperationInstruction },
  DevicesInstructionList: { screen: DevicesInstructionList },
}, {
  initialRouteName: 'Login',
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

const AppWithRedux = ({ dispatch })=> (
  <App navigation={addNavigationHelpers({ dispatch })} />
)

const mapStateToProps = state=> ({
  // state: state,
})

export default App;

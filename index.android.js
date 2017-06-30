/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./src/app";
import Http from "./src/utils/http";
import AppReducers  from "./src/reducers";
import Storage from "./src/utils/storage";
import mqtt from "./src/utils/browserMqtt";

const store = createStore(AppReducers);

//  设置全局变量
global.Storage = Storage;
global.Http = Http;

export default class YmlMerchants extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('YmlMerchants', () => YmlMerchants);

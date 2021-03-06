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
import AppReducers  from "./src/reducers";
import Storage from "./src/utils/storage2";

const store = createStore(AppReducers);

global.storage = Storage;

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

/*
* @Author: heyuhang
* @Date:   2017-06-27 16:27:06
* @Last Modified by:   heyuhang
* @Last Modified time: 2017-06-29 11:40:11
*/

'use strict';

/*
  RN用到的本地存储，注意获取key的函数返回的是promise对象，即是
  异步的操作。
 */

import React,{ AsyncStorage } from 'react-native';

class Storage {

  static get(key) {
    return AsyncStorage.getItem(key).then((value) => {
      return JSON.parse(value);
    });
  }

  static set(key, value) {
    return AsyncStorage.setItem(key, JSON.stringify(value));
  }

  static update(key, value) {
    return Storage.get(key).then((item) => {
      value = typeof value === 'string' ? value : Object.assign({}, item, value);
      return AsyncStorage.setItem(key, JSON.stringify(value));
    });
  }

  static delete(key) {
    return AsyncStorage.removeItem(key);
  }
}

export default Storage;
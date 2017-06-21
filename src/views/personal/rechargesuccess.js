import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';

import { Button } from "../../components";
import { BG_COLOR } from "../../../globalconfig";

class RechargeSuccess extends Component {
  static navigationOptions = {
    title: '充值成功',
  }

  render() {
    return (
      <View style={{backgroundColor: BG_COLOR, flex: 1, alignItems: 'center', paddingHorizontal: 10}}>
        <Image style={{marginTop: 40,  width: 70, height: 70}} source={require('../../static/img/device_recharge_icon.png')} />
        <Text style={{fontSize: 18, color: '#333', marginTop: 17}}>充值成功</Text>
        <Text style={{fontSize: 15, color: '#666', marginTop: 10}}>美丽之路,尽在医美莱</Text>
        <View style={{flexDirection: 'row'}}>
          <Button text="完成" style={{flex: 1, marginTop: 37}}/>
        </View>
      </View>
    )
  }
}

export default RechargeSuccess;

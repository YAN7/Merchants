import React, { Component } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { APP_COLOR, BORDER_COLOR, BG_COLOR, SCREEN_WIDTH, SCREEN_PIXELRADIO } from "../../../globalconfig";

class DevicesData extends Component {
  static navigationOptions = {
    title: "设备数据",
    headerTitleStyle: {
      fontWeight: '400'
    }
  }

  _renderHasData = ()=> {
    return (
      <View style={{}}>
        <View style={[styles.borderB, {flexDirection: 'row', backgroundColor: BG_COLOR, justifyContent: 'space-between', padding: 12}]}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
            <Image style={{width: 20, height: 20}} source={require("../../static/img/store_physician_icon.png")}/>
            <Text>   2017-05-26 23:18:00</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
            <Image style={{width: 20, height: 20}} source={require("../../static/img/store_physician_icon.png")}/>
            <Text>   张璇</Text>
          </View>
        </View>
        {/* 九宫格 */}
        <View style={{flexDirection: 'row', flexWrap: 'wrap', backgroundColor: BG_COLOR, marginBottom: 10}}>
          <View style={[styles.borderB, styles.borderR, {width: SCREEN_WIDTH/3, height: 100, justifyContent: 'center', alignItems: 'center'}]}>
            <Text style={{fontSize: 16, color: '#999'}}>能量</Text>
            <Text style={{fontSize: 18, color: "#333", marginTop: 7}}>4.5j</Text>
          </View>
        </View>
      </View>
    )
  }

  _renderNoData = ()=> (
    <View style={{backgroundColor: BG_COLOR}}>
      <View style={[styles.borderB, {flexDirection: 'row', justifyContent: 'space-between', padding: 12}]}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
          <Image style={{width: 20, height: 20}} source={require("../../static/img/store_physician_icon.png")}/>
          <Text>   2017-05-26 23:18:00</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
          <Image style={{width: 20, height: 20}} source={require("../../static/img/store_physician_icon.png")}/>
          <Text>   张璇</Text>
        </View>
      </View>
      {/* 无记录 */}
      <Text style={{alignSelf: 'center', padding: 20}}>无记录</Text>
    </View>
  )

  render() {
    return (
      <View>
        {this._renderHasData()}
        {this._renderNoData()}
      </View>
    )
  }
}

const styles =StyleSheet.create({
  borderB: {
    borderStyle: 'solid',
    borderBottomWidth: 1/SCREEN_PIXELRADIO,
    borderBottomColor: BORDER_COLOR,
  },
  borderR: {
    borderStyle: 'solid',
    borderRightWidth: 1/SCREEN_PIXELRADIO,
    borderRightColor: BORDER_COLOR,
  }
})

export default DevicesData;

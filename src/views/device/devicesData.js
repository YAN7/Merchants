import React, { Component } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { APP_COLOR, BORDER_COLOR, BG_COLOR, SCREEN_WIDTH, SCREEN_PIXELRADIO } from "../../globalconfig";

const bufferUtil = require('yml-mqtt-buffer-tool')();

class DevicesData extends Component {

  static navigationOptions = {
    title: "设备数据",
    headerTitleStyle: {
      fontWeight: '400'
    }
  }

  state = {
    mqttToken: "",
  }

  async componentDidMount() {
      await this.getToken();
      let client = mqtt.connect('ws://iot.yml360.com:3000', {
        clientId:`app@${this.state.mqttToken}`, //
        username: this.state.mqttToken,  //
        reconnectPeriod: 1000,
        clean: true,
        // password:'CO3VO2tkRWuSwEcw',
      }); // you add a ws:// url here

      client.on('connect', ()=> {
        alert(this.props.navigation.state.params.device_id)
      });

      client.on('error', (err)=> {
        alert(err)
      });

      client.subscribe(`/devices/${this.props.navigation.state.params.device_id}/data`);

      client.on("message", (topic, payload)=> {
        alert([topic, payload.readUInt16BE(0)].join(": "));
        // client.end()
      });
  }

  // 获取mqtt的token
  async getToken() {
    await Http.post("/store/?method=device.getToken", { "token": "tzlvys-5b9fa43zm-rli", "store_admin_id": 10 }, re=> {
      this.setState({mqttToken: re.data.access_token})
    })
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

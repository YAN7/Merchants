import React, { Component } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Marquee from "@remobile/react-native-marquee";

import { setDeviceData } from "../../actions/devices";
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
    deviceData: [],
    client: '',
  }

  async componentDidMount() {
      await this.getToken();
      // 公网： test.mosca.io:3000
      // 测试： iot.yml360.com:3000
      let client = mqtt.connect('ws://iot.yml360.com:3000', {
        clientId:`app@${this.state.mqttToken}`, //
        username: this.state.mqttToken,  //
        reconnectPeriod: 1000,
        clean: true,
      });

      client.on('connect', ()=> {
        this.setState({
          client,
        })
      });

      client.on('error', (err)=> {
        alert(err)
      });

      client.subscribe(`/devices/${this.props.navigation.state.params.device_id}/data`);


      client.on("message", (topic, payload)=> {
        try {
          // 校验数据
          // flag ? `校验成功` : '校验失败'
          const flag = bufferUtil.rw.check(payload);
          if (flag) {
            const msg = bufferUtil.rw.read(payload, '/devices/:id/data');
            const info = bufferUtil.getDevice(this.props.navigation.state.params.modelName).dataDecode(msg);
            this.setState({
              deviceData: info.keyValues,
            })
          }
        } catch(err) {
          console.log(err);
        }
      })
  }

  componentWillUnmount() {
    this.state.client && this.state.client.end();
  }

  // 获取mqtt的token
  async getToken() {
    await Http.post("/store/?method=device.getToken", { "token": "e2hufv-5bb1ce063-mfb", "store_admin_id": 10 }, re=> {
      this.setState({mqttToken: re.data.access_token})
    })
  }

  _renderCustomer = ()=> (
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
  )

  _renderHasData = ()=> {
    return (
      <View>
        {this._renderCustomer()}
        {/* 九宫格 */}
        <View style={{flexDirection: 'row', flexWrap: 'wrap', backgroundColor: BG_COLOR, marginBottom: 10}}>
          {
            this.state.deviceData.length > 0 && this.state.deviceData.map((item, index)=> (
              <View key={index} style={[styles.borderB, styles.borderR, {width: SCREEN_WIDTH/3, height: 100, justifyContent: 'center', alignItems: 'center', padding: 5}]}>
                {
                  item.key.length >= 7
                    ? <Marquee style={{fontSize: 16, color: '#999'}}>{item.key}</Marquee>
                    : <Text style={{fontSize: 16, color: '#999'}}>{item.key}</Text>
                }
                {
                  item.value.length >= 7
                    ? <Marquee style={{fontSize: 18, color: "#333", marginTop: 7}}>{item.value}</Marquee>
                    : <Text style={{fontSize: 18, color: "#333", marginTop: 7}}>{item.value}</Text>
                }
              </View>
            ))
          }
        </View>
      </View>
    )
  }

  _renderNoData = ()=> (
    <View style={{backgroundColor: BG_COLOR}}>
      {this._renderCustomer()}
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

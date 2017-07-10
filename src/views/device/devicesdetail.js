/*
* @Author: heyuhang
* @Date:   2017-07-04 15:03:25
* @Last Modified by:   heyuhang
* @Last Modified time: 2017-07-10 12:17:42
*/

'use strict';
import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Marquee from "@remobile/react-native-marquee";

import { Hud, Button, SquareItem } from "../../components";
import { SCREEN_PIXELRADIO, APP_COLOR, BG_COLOR, PLATFORM, BORDER_COLOR, SCREEN_WIDTH } from "../../globalconfig";

const bufferUtil = require('yml-mqtt-buffer-tool')();

class DevicesDetail extends Component {

	static navigationOptions = {
		header: null,
	}

	state = {
    mqttToken: "",
    deviceData: [],
    client: '',
    machineState: null, // 0: 关机， 1:待机中， 2: 准备中，3:治疗中， 4:设置模式
    canLock: false,
    lock: 0,
	}

  async componentDidMount() {
    await this.getToken()
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
      alert('error');
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
          this.getMachineState(msg.keyValues);
          this.setState({
            deviceData: info.keyValues,
          })
        } else {
          this.hud.showMessage("校验失败");
        }
      } catch(err) {
        // alert(`client-${err}`);
      }
    })
  }

	componentWillUnmount() {
    this.state.client && this.state.client.end();
  }

  // 获取mqtt的token
  async getToken() {
    await Http.postWithAuth("/store/?method=device.getToken", {}, re=> {
      this.setState({mqttToken: re.data.access_token})
    })
  }

  // 获取机器运行状态
  getMachineState(arr) {
  	for (let elem of arr) {
      if (elem.key == 5019) {
        switch (elem.value) {
          case 1 : {
            this.setState({canLock: true})
            break;
          }
          case 10 : {
            this.setState({canLock: false})
            break;
          }
          default:
            break;
        }
      }
  		if (elem.key == 5019 && elem.value == 0) {
  			this.setState({
  				machineState: "关机"
  			})
  			return;
  		}
  		if (elem.key == 2) {
  			switch (elem.value) {
  				case 0:
  					this.setState({machineState: "待机中"})
  					break;
  				case 1:
  					this.setState({machineState: "准备中"})
  					break;
  				case 2:
  					this.setState({machineState: "治疗中"})
  					break;
  				case 3:
  					this.setState({machineState: "设置模式"})
  					break;
  			}
  		}
  	}
  }

  // 开关机
  powerMachine() {
  	const params = {
  		"device_id": this.props.navigation.state.params.device_id,
      "action": this.state.lock,
      // 0： 锁定 1: 解锁
  		// "action": 1,
  	}
  	Http.postWithAuth("/store/?method=device.power", params, re=> {
  		this.hud.showMessage(`success: ${params.action}`);
      alert(JSON.stringify(re));
  	}, re=> {
  		this.hud.showMessage(`error: ${params.action}`);
  	}, ()=> {
      this.setState({
        lock: this.state.lock == 1 ? 0 : 1,
      })
    })
  }

	render () {
		const { deviceData, machineState } = this.state;
		const { navigation } = this.props;
		return (
			<ScrollView  style={{flex: 1, backgroundColor: BG_COLOR}}>
        <View style={{flex: 1}}>
          <LinearGradient locations={[0, 0.8]} colors={['#82dcf3', '#3eadf3']} style={styles.header}>
            <View style={styles.storename}>
              <TouchableOpacity onPress={()=> navigation.goBack()}>
                <Image tintColor="#fff" style={{width: 20, height: 20}} source={require("./../../static/img/return_icon.png")}/>
              </TouchableOpacity>
              <Text numberOfLines={1} style={styles.store_text}>{navigation.state.params.modelName}</Text>
              <Button
  	            style={{borderWidth: 1, borderColor: "#fff", borderRadius: 4 }}
  	            textStyle={{color: "#fff", fontSize: 16}}
  	            text={machineState === "关机" ? "解锁" : "锁定"}
  	            type="light"
  	            handlePress={()=> this.powerMachine()}
              />
            </View>
            <Image style={{width: 160, height: 160}} resizeMode="contain" source={require("../../static/img/equipment_icon_woeking.png")} />
            <Text style={{color: '#fff', fontSize: 20, fontWeight: "bold", marginTop: 20}}>{machineState}</Text>
          </LinearGradient>
   				<View style={{flexDirection: 'row', flexWrap: 'wrap', backgroundColor: BG_COLOR, marginBottom: 10}}>
            {
              deviceData.length > 0 && deviceData != null && deviceData.map((item, index)=> (
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
        <Hud ref={hud=> this.hud=hud} />
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
  header: {
    height: 280,
    backgroundColor: 'transparent',
    alignItems: "center",
  },
  storename: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
    margin: 7,
    height: 80/SCREEN_PIXELRADIO,
    marginVertical: PLATFORM === "iOS" ? 20 : 10,
  },
  store_text: {
    flex: 1,
    textAlign: 'center',
    color: "#fff",
    fontSize: 18,
  },
  borderB: {
    borderStyle: 'solid',
    borderBottomWidth: 1/SCREEN_PIXELRADIO,
    borderBottomColor: BORDER_COLOR,
  },
  borderR: {
    borderStyle: 'solid',
    borderRightWidth: 1/SCREEN_PIXELRADIO,
    borderRightColor: BORDER_COLOR,
  },

})

export default DevicesDetail;

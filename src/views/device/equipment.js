import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ListView,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import { SCREEN_PIXELRADIO, APP_COLOR, BORDER_COLOR } from "../../../globalconfig";

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Equipment extends Component {
  state = {
    recordList: [{
      img: 'http://placeholder.qiniudn.com/100x100',
      title: '韩国导光臂',
      order: '452118453453158',
      time: '1分23秒',
    },{
      img: 'http://placeholder.qiniudn.com/100x100',
      title: '韩国导光臂',
      order: '452118453453158',
      time: '1分23秒',
    }]
  }
  renderRecord = (list)=> (
    <View style={styles.list_wrapper}>
      <Image source={{uri: list.img}} style={{width: 50, height: 50,marginRight: 10, marginLeft: 18}} />
      <View style={[styles.borderB,{flex: 1, flexDirection: 'row', justifyContent: "space-between", paddingBottom: 15}]}>
        <View style={{flex: 1, justifyContent: 'center', }}>
          <Text style={{fontSize: 15, color: "#333"}}>{list.title}</Text>
          <Text style={{fontSize: 12, color: "#666", marginTop: 5}}>{list.order}</Text>
        </View>
        <Text style={{width: 90, fontSize: 13, color: "#999", paddingTop: 4}}>时长: {list.time}</Text>
      </View>
    </View>
  )
  render() {
    const { recordList } = this.state;
    return (
      <View>
        <View style={styles.title}>
          <Image style={{width: 20, height: 20, marginLeft: 7}} source={require("./../../static/img/store_settings1_icon.png")}/>
          <Text style={styles.title_text}>天河时尚医美店</Text>
          <Image style={{width: 20, height: 20, marginRight: 7}} source={require("./../../static/img/store_message1_icon.png")} />
        </View>
        <TouchableHighlight style={{backgroundColor: '#fff'}}>
          <View style={[styles.rowdisplay, styles.borderB, { justifyContent: 'space-between', height: 40, paddingHorizontal: 12 }]}>
            <Text style={{fontSize: 14, color: '#333'}}>我的设备</Text>
            <Text style={{fontSize: 13, color: '#999'}}>3 &gt;</Text>
          </View>
        </TouchableHighlight>
        <View style={{height: 40, paddingLeft: 12,justifyContent: 'center'}}>
          <Text style={{fontSize: 13, color: "#333", }}>今日操作记录</Text>
        </View>
        {
          recordList.length > 0 &&
          <ListView
            dataSource={ds.cloneWithRows(recordList)}
            renderRow={(rowData)=> this.renderRecord(rowData)}
          />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  rowdisplay: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderB: {
    borderStyle: 'solid',
    borderBottomColor: BORDER_COLOR,
    borderBottomWidth: 0.5,
  },
  title: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
    height: 150/SCREEN_PIXELRADIO,
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderBottomColor: BORDER_COLOR,
    borderBottomWidth: 1,
  },
  title_text: {
    flex: 1,
    textAlign: 'center',
    color: "#333",
    fontSize: 18,
  },
  list_wrapper: {
    paddingTop: 10,
    flexDirection: 'row',
    backgroundColor: '#fff',
  }
})
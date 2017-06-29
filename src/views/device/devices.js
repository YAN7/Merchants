import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  ListView,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import { SCREEN_PIXELRADIO, APP_COLOR, BORDER_COLOR, BG_COLOR } from "../../globalconfig";

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Devices extends Component {
  state = {
    recordList: [{
      img: 'http://placeholder.qiniudn.com/100x100',
      title: '韩国导光臂',
      order: '452118453453158',
      time: '1分23秒',
      key: 1,
    },{
      img: 'http://placeholder.qiniudn.com/100x100',
      title: '韩国导光臂',
      order: '452118453453158',
      time: '1分23秒',
      key: 2,
    },{
      img: 'http://placeholder.qiniudn.com/100x100',
      title: '韩国导光臂',
      order: '452118453453158',
      time: '1分23秒',
      key: 3,
    }]
  }
  renderRecord = (list)=> (
    <View key={list.key} style={styles.list_wrapper}>
      <Image source={{uri: list.img}} style={{width: 50, height: 50,marginHorizontal: 18}} />
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
    const { navigation } = this.props;
    return (
      <View>
        <View style={styles.title}>
          <TouchableOpacity onPress={()=> navigation.navigate('Settings')}>
            <Image style={{width: 20, height: 20, marginLeft: 7}} source={require("./../../static/img/store_settings1_icon.png")}/>
          </TouchableOpacity>
          <Text style={styles.title_text}>天河时尚医美店</Text>
          <TouchableOpacity onPress={()=> navigation.navigate('MessageCenter')}>
            <Image style={{width: 20, height: 20, marginRight: 7}} source={require("./../../static/img/store_message1_icon.png")} />
          </TouchableOpacity>
        </View>
        {/* <TouchableHighlight style={{backgroundColor: '#fff'}}>
          <View style={[styles.rowdisplay, styles.borderB, { justifyContent: 'space-between', height: 40, paddingHorizontal: 12 }]}>
            <Text style={{fontSize: 14, color: '#333'}}>我的设备</Text>
            <Text style={{fontSize: 13, color: '#999'}}>3 &gt;</Text>
          </View>
        </TouchableHighlight> */}
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', backgroundColor: BG_COLOR, height: 65}}>
          <TouchableOpacity
            onPress={()=> navigation.navigate('Balance')}
            style={[{alignItems: 'center', justifyContent: 'center', flex: 1}]}>
            <Text style={{fontSize: 12, color: '#333'}}>我的余额</Text>
            <Text style={{fontSize: 18, color: APP_COLOR}}>3000.00</Text>
          </TouchableOpacity>
          <View style={{ backgroundColor: BORDER_COLOR, width: 1/SCREEN_PIXELRADIO, height: 35}} />
          <TouchableOpacity
            onPress={()=> navigation.navigate("MyDevices")}
            style={[{alignItems: 'center', justifyContent: 'center', flex: 1}]}>
            <Text style={{fontSize: 12, color: '#333'}}>我的设备</Text>
            <Text style={{fontSize: 18, color: APP_COLOR}}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: 40, paddingLeft: 12,justifyContent: 'center'}}>
          <Text style={{fontSize: 13, color: "#333", }}>今日操作记录</Text>
        </View>
        {
          recordList.length > 0 &&
          <FlatList
            data={recordList}
            renderItem={({item})=> this.renderRecord(item)}
            getItemLayout={(data, index)=> (
              {length: 75, offset: 75 * index, index}
            )}
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
    borderBottomWidth: 1/SCREEN_PIXELRADIO,
  },
  borderR: {
    borderStyle: 'solid',
    borderRightColor: BORDER_COLOR,
    borderRightWidth: 1/SCREEN_PIXELRADIO,
  },
  title: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
    height: 55,
    paddingTop: 10,
    paddingHorizontal: 7,
    backgroundColor: '#fff',
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
    backgroundColor: BG_COLOR,
  }
})

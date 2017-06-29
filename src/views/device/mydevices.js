import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";

import { Button } from "../../components";
import { BG_COLOR, APP_COLOR, BORDER_BOTTOM } from '../../globalconfig';

class MyDevices extends Component {
  static navigationOptions = {
    title: '我的设备',
    headerRight: <Button type="light" text="新增" />,
    headerTitleStyle: {
      fontWeight: '200',
    }
  }

  _renderList = ()=> (
    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: BG_COLOR, height: 60, paddingLeft: 15}}>
      <Image style={{width: 50, height: 50, marginRight: 8}} source={{uri: 'http://placeholder.qiniudn.com/100x100'}} />
      <View style={[BORDER_BOTTOM, {paddingRight: 15, height: 60, flexDirection: "row", flex: 1, justifyContent: 'space-between', alignItems: 'center'}]}>
        <View>
          <Text style={{color: '#333'}}>韩国导光臂</Text>
          <Text>1569876815135</Text>
        </View>
        <Image style={{width: 25, height: 25}} source={require("../../static/img/store_signal_icon.png")} />
      </View>
    </View>
  )

  render() {
    return (
      <ScrollView>
        <Text style={{paddingHorizontal: 15, paddingVertical: 12}}>启动中</Text>
        {this._renderList()}
        {this._renderList()}
        {this._renderList()}
        {this._renderList()}
        <Text style={{paddingHorizontal: 15, paddingVertical: 12}}>关闭中</Text>
        {this._renderList()}
        {this._renderList()}
        {this._renderList()}
        {this._renderList()}
      </ScrollView>
    )
  }
}

export default MyDevices;

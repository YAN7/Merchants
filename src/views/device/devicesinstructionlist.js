import React, { Component } from "react";
import {
  Text,
  Image,
  View,
  FlatList,
  StyleSheet,
} from "react-native";

import { SCREEN_PIXELRADIO, APP_COLOR, BORDER_COLOR, BORDER_BOTTOM, BG_COLOR } from "../../globalconfig";

class DevicesInstructionList extends Component {
  static navigationOptions = {
    title: "说明列表",
  }

  state = {
    recordList: [{
      img: 'http://placeholder.qiniudn.com/100x100',
      title: '韩国导光臂',
      order: '无痛脱毛系列',
      time: '1分23秒',
      key: 1,
    },{
      img: 'http://placeholder.qiniudn.com/100x100',
      title: '韩国导光臂',
      order: '无痛脱毛系列',
      time: '1分23秒',
      key: 2,
    },{
      img: 'http://placeholder.qiniudn.com/100x100',
      title: '韩国导光臂',
      order: '无痛脱毛系列',
      time: '1分23秒',
      key: 3,
    }]
  }

  renderRecord = (list)=> (
    <View key={list.key} style={{paddingTop: 10, flexDirection: 'row', backgroundColor: BG_COLOR}}>
      <Image source={{uri: list.img}} style={{width: 50, height: 50,marginRight: 10, marginLeft: 18}} />
      <View style={[BORDER_BOTTOM, {flex: 1, flexDirection: 'row', justifyContent: "space-between", paddingBottom: 15}]}>
        <View style={{flex: 1, justifyContent: 'center', }}>
          <Text style={{fontSize: 15, color: "#333"}}>{list.title}</Text>
          <Text style={{fontSize: 12, color: "#666", marginTop: 5}}>{list.order}</Text>
        </View>
      </View>
    </View>
  )

  render() {
    const { recordList } = this.state;

    return (
      <View>
        <FlatList
          data={recordList}
          renderItem={({item})=> this.renderRecord(item)}
          getItemLayout={(data, index)=> (
            {length: 75, offset: 75 * index, index}
          )}
        />
      </View>
    )
  }
}

export default DevicesInstructionList;

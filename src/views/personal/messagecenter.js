import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { BG_COLOR, BORDER_BOTTOM } from "../../globalconfig";
import { NoItem } from "../../components";

class MessageCenter extends Component {
  static navigationOptions = {
    title: '消息中心',
    headerTitleStyle: {
      fontWeight: '200',
    }
  }

  state = {
    dataSource: [{
      title: '医美莱全平台公测今日正式开启!',
      desc: '龙卡及技术可怜的借口拉屎拉科技速度快了敬爱快乐圣诞节快拉上几点考拉拉看见爱上的快乐龙卡及技术可怜的借口拉屎拉科技速度快了敬爱快乐圣诞节快拉上几点考拉拉看见爱上的快乐龙卡及技术可怜的借口拉屎拉科技速度快了敬爱快乐圣诞节快拉上几点考拉拉看见爱上的快乐',
      time: '2019-09-26 12:12',
      id: 1,
    },{
      title: '医美莱全平台公测今日正式开启!',
      desc: '龙卡及技术可怜的借口拉屎拉科技速度快了敬爱快乐圣诞节快拉上几点考拉拉看见爱上的快乐龙卡及技术可怜的借口拉屎拉科技速度快了敬爱快乐圣诞节快拉上几点考拉拉看见爱上的快乐龙卡及技术可怜的借口拉屎拉科技速度快了敬爱快乐圣诞节快拉上几点考拉拉看见爱上的快乐',
      time: '2019-09-26 12:12',
      id: 2,
    },{
      title: '医美莱全平台公测今日正式开启!',
      desc: '龙卡及技术可怜的借口拉屎拉科技速度快了敬爱快乐圣诞节快拉上几点考拉拉看见爱上的快乐龙卡及技术可怜的借口拉屎拉科技速度快了敬爱快乐圣诞节快拉上几点考拉拉看见爱上的快乐龙卡及技术可怜的借口拉屎拉科技速度快了敬爱快乐圣诞节快拉上几点考拉拉看见爱上的快乐',
      time: '2019-09-26 12:12',
      id: 3,
    },{
      title: '医美莱全平台公测今日正式开启!',
      desc: '龙卡及技术可怜的借口拉屎拉科技速度快了敬爱快乐圣诞节快拉上几点考拉拉看见爱上的快乐龙卡及技术可怜的借口拉屎拉科技速度快了敬爱快乐圣诞节快拉上几点考拉拉看见爱上的快乐龙卡及技术可怜的借口拉屎拉科技速度快了敬爱快乐圣诞节快拉上几点考拉拉看见爱上的快乐',
      time: '2019-09-26 12:12',
      id: 4,
    },]
  }

  _renderList = ({ item, index })=> (
    <TouchableOpacity style={[BORDER_BOTTOM, { padding: 10, backgroundColor: '#fff' }]}>
      <Text numberOfLines={1} style={{color: '#333', fontSize: 16}}>{item.id}</Text>
      <Text numberOfLines={2} style={{color: '#333', fontSize: 14, lineHeight: 22}}>{item.desc}</Text>
      <Text style={{textAlign: 'right', fontSize: 10, color: '#999', lineHeight: 16}}>{item.time}</Text>
    </TouchableOpacity>
  )

  render() {
    const { dataSource } = this.state;
    return (
      <View style={{flex: 1, backgroundColor: BG_COLOR}}>
        {
          dataSource.length > 0
          ? <FlatList
              data={dataSource}
              keyExtractor={(item, index) => item.id}
              renderItem = {({item, index})=> this._renderList({item, index})}
            />
          : <NoItem
            image={require('../../static/img/message_icon.png')}
            title="暂无消息"
           />
        }

      </View>
    )
  }
}

export default MessageCenter;

import React, { Component } from "react";
import {
  Image,
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Button, ListItem } from "../../components";

class BillDetail extends Component {
  static navigationOptions = {
    title: "账单明细",
    headerRight: <Button text="说明" type="light" />
  }

  state = {
    dataSource: [{
      image: 'http://placeholder.qiniudn.com/100x100',
      key1: '韩国导光臂',
      key2: '时长: 1分30秒',
      key3: '45558956156156456',
      key4: '消费: 185.52',
      id: 1
    },{
      image: 'http://placeholder.qiniudn.com/100x100',
      key1: '韩国导光臂',
      key2: '时长: 1分30秒',
      // key3: '45558956156156456',
      // key4: '消费: 123.90',
      id: 2
    },],
  }

  render() {
    const { dataSource } = this.state;

    return (
      <FlatList
        data={dataSource}
        keyExtractor={item=> item.id}
        renderItem={({item})=> <ListItem {...item} />}
      />
    )
  }
}

export default BillDetail;

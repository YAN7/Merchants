import React, { Component } from 'react';
import {
  View,
  List,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { NoItem, Button } from '../../components';
import { BG_COLOR, BORDER_BOTTOM } from '../../../globalconfig';

class AssistantManager extends Component {
  static navigationOptions = {
    title: '管理店员',
    headerRight: <Button type="light" text="新增"  />
  }

  state = {
    dataSource: [{
      name: '01-美眉',
      count: '28次',
      id: 1,
    },{
      name: '01-美眉',
      count: '28次',
      id: 2,
    },{
      name: '01-美眉',
      count: '28次',
      id: 3,
    },{
      name: '01-美眉',
      count: '28次',
      id: 4,
    },]
  }

  _renderList = ({item}) => (
    <TouchableOpacity style={[BORDER_BOTTOM, {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 51}]}>
      <Text style={{fontSize: 14, color: '#333'}}>{item.name}</Text>
      <Text style={{fontSize: 14, color: '#999'}}>{item.count}</Text>
    </TouchableOpacity>
  )

  render() {
    const { dataSource } = this.state;
    return (
      <View style={{flex: 1, paddingHorizontal: 10, backgroundColor: BG_COLOR}}>
        <FlatList
          data={ dataSource }
          keyExtractor={(item, idnex)=> item.id}
          renderItem = {({item, index})=> this._renderList({item, index})}
        />
        {/* <NoItem
          image={require('../../static/img/store_clerk_icon.png')}
          title="暂无店员"
        /> */}
      </View>
    )
  }
}

export default AssistantManager;

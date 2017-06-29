import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';

// const List
import { BG_COLOR, BORDER_BOTTOM } from '../../globalconfig';

class ServiceRecord extends Component {
  static navigationOptions = {
    title: '服务记录',
  }

  state = {
    dataSource: [{
      url: 'http://placeholder.qiniudn.com/100x100',
      name: 'hehe',
      time: '2017-05-23 12:34',
      projectName: '黑脸娃娃',
      servicer: '张泉林',
      id: 1
    },{
      url: 'http://placeholder.qiniudn.com/100x100',
      name: 'haha',
      time: '2017-07-12 17:22',
      projectName: '白脸娃娃',
      servicer: '张思',
      id: 2
    },],
  }

  _renderList = ({item, index})=> (
    <View style={[BORDER_BOTTOM, {flexDirection: 'row', height: 60, paddingHorizontal: 10, alignItems: 'center', backgroundColor: '#fff'}]}>
      <Image style={{width: 40, height: 40, marginRight: 10}} source={{ uri: item.url }} />
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text style={{fontSize: 15, color: '#333'}}>{item.name}</Text>
          <Text style={{fontSize: 12, color: '#999', marginTop: 5}}>{item.time}</Text>
        </View>
        <View>
          <Text style={{fontSize: 15, color: '#666'}}>{item.projectName}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
            <Image style={{width: 15, height: 15, marginRight: 3}} source={require('../../static/img/store_physician_icon.png')} />
            <Text style={{fontSize: 12, color: '#999'}}>{item.servicer}</Text>
          </View>
        </View>
      </View>
    </View>
  )

  render() {
    const { dataSource } = this.state;
    return (
      <View style={{flex: 1, backgroundColor: BG_COLOR}}>
        <FlatList
          data={ dataSource }
          getItemLayout={(data, index)=> ({ length: 60, offset: 60 * index, index })}
          keyExtractor={(item, index)=> item.id}
          renderItem = {({item, index})=> this._renderList({item, index})}
        />
      </View>
    )
  }
}

export default ServiceRecord;

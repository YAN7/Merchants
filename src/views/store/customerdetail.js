import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

import { BORDER_COLOR, BG_COLOR, SCREEN_PIXELRADIO, BORDER_BOTTOM } from "../../../globalconfig";

class CustomDetail extends Component {

  static navigationOptions = ({navigation})=> ({
    title: navigation.state.params.name
  })

  state = {
    listData: [{
      name: '黑脸娃娃',
      id: 1,
    },{
      name: '胶原蛋白+面部V雕',
      id: 2,
    },{
      name: '胶原蛋白+光子嫩肤',
      id: 3,
    }]
  }

  _renderList = ({item}) => (
    <TouchableHighlight key={item.id} style={{backgroundColor: BG_COLOR}}>
      <View style={[styles.borderB, {flexDirection: 'row', alignItems: 'center', justifyContent: "space-between",padding: 10, height: 45}]}>
        <Text style={{fontSize: 15, color: '#333'}}>{item.name}</Text>
        <Text styl={{fontSize: 15, color: "#333"}}>&gt;</Text>
      </View>
    </TouchableHighlight>
  )

  render() {
    const {listData} = this.state;
    return (
      <View>
        {/* { listData.length > 0
          ? listData.map((item, index)=> this._renderList(item, index))
          : <View style={{alignItems: 'center', marginTop: 120}}>
              <Image style={{width: 80, height: 80}} source={require("../../static/img/store_customer_clear_icon.png")} />
              <Text>暂无优惠券</Text>
            </View>
        } */}
        <FlatList
          data={listData}
          keyExtractor={(item, index)=> item.id}
          renderItem={({item})=> this._renderList({item})}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  borderB: BORDER_BOTTOM,
})

export default CustomDetail;

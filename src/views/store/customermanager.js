import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

import { SCREEN_PIXELRADIO, BORDER_COLOR, BG_COLOR } from "../../../globalconfig";

class CustomerManager extends Component {
  static navigationOptions = {
    title: '用户管理',
    headerTitleStyle: {
      fontWeight: '200',
    }
  }
  state = {
    listData: [{
      url: 'http://placeholder.qiniudn.com/100x100',
      name: 'Mima',
      phone: '18565082545',
    },{
      url: 'http://placeholder.qiniudn.com/100x100',
      name: 'Mini',
      phone: '18565082545',
    },{
      url: 'http://placeholder.qiniudn.com/100x100',
      name: 'Miha',
      phone: '18565082545',
    }]
  }

  _renderList = (item, index, handlePress)=> (
    <TouchableHighlight key={index} onPress={handlePress}>
      <View style={[styles.borderB, {backgroundColor: BG_COLOR, flexDirection: 'row', height: 60, padding: 10}]}>
        <Image style={{width: 40, height: 40, borderRadius: 20, marginRight: 12,}} source={{ uri: 'http://placeholder.qiniudn.com/100x100'}} />
        <View style={{flex: 1}}>
          <Text style={{fontSize: 15, color: '#333'}}>Mima</Text>
          <Text  style={{fontSize: 12, color: '#666', marginTop: 2}}>18626542658</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
  handlePress = (item) => {
    this.props.navigation.navigate("CustomDetail",{name: item.name});
  }
  render() {
    const {listData} = this.state;
    const {navigate} = this.props.navigation;
    return (
      <View>
        {listData.map((item, index)=> this._renderList(item, index, ()=> this.handlePress(item)))}
      </View>
    )
  }
}

 const styles = StyleSheet.create({
   borderB: {
     borderStyle: 'solid',
     borderBottomWidth: 1/SCREEN_PIXELRADIO,
     borderBottomColor: BORDER_COLOR,
   }
 })

export default CustomerManager;

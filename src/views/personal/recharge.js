import React, { Component } from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { APP_COLOR, BG_COLOR, BORDER_BOTTOM } from '../../globalconfig';
import { Button } from "../../components";

const ListItem = ({ value, image, handlePress, selected }) => (
  <TouchableOpacity onPress={handlePress} style={{flexDirection: 'row', height: 51, alignItems: 'center', justifyContent: 'space-between'}}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image style={{marginRight: 6, width: 35, height: 35}} source={image} />
      <Text style={{fontSize: 15, color: '#333'}}>{value}</Text>
    </View>
    {selected && <Image style={{width: 20, height: 20}} source={require('../../static/img/device_selected_icon.png')} />}
  </TouchableOpacity>
)

ListItem.defaultProps = {
  selected: false,
}

class Recharge extends Component {
  static navigationOptions = {
    title: '充值'
  }
  state = {
    isSelected: 0,
  }
  render() {
    const { isSelected } = this.state;
    return (
      <View style={{flex: 1, backgroundColor: '#f8f8f8'}}>
        <View style={{paddingHorizontal: 120, marginHorizontal: 10, marginTop: 14,  backgroundColor: BG_COLOR,}}>
          <TextInput
            underlineColorAndroid="transparent"
            selectionColor={APP_COLOR}
            style={{backgroundColor: BG_COLOR, padding: 10}}
          />
        </View>
        <View style={{paddingHorizontal: 10, backgroundColor: BG_COLOR }}>
          <ListItem
            value="微信支付"
            image={require('../../static/img/device_weixinzhifu_icon.png')}
            selected={isSelected==0}
            handlePress={()=> this.setState({isSelected: 0})}
          />
          <ListItem
            value="支付宝支付"
            image={require('../../static/img/device_zhifubao_icon.png')}
            selected={isSelected==1}
            handlePress={()=> this.setState({isSelected: 1})}
          />
          <Button text="充值" style={{marginTop: 71}} />
        </View>
      </View>
    )
  }
}

export default Recharge;

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { APP_COLOR, BG_COLOR, BORDER_BOTTOM } from '../../../globalconfig';

const ListItem = ({ value, image, handlePress }) => (
  <TouchableOpacity onPress={handlePress} style={[BORDER_BOTTOM, {flexDirection: 'row', height: 51, alignItems: 'center', justifyContent: 'space-between'}]}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image style={{marginRight: 6}} source={image} />
      <Text>{value}</Text>
    </View>
    <Text>&gt;</Text>
  </TouchableOpacity>
)

class Balance extends Component {
  static navigationOptions = {
    title: '余额'
  }
  render() {
    return (
      <View>
        <View style ={{height: 162, backgroundColor: '#3eadf3', alignItems: 'center'}}>
          <Text style={{fontSize: 15, color: '#fdeaee', marginTop: 26}}>账户余额 (元)</Text>
          <Text style={{fontSize: 40, color: '#fff', marginTop: 12}}>2563.00</Text>
        </View>
        <View style={{paddingHorizontal: 10, backgroundColor: BG_COLOR }}>
          <ListItem value="充值" image={require("../../static/img/store_recharge_icon.png")} />
          <ListItem value="账单明细" image={require("../../static/img/store_detail_icon.png")} />
        </View>
      </View>
    )
  }
}

export default Balance;

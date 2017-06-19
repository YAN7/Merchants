import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

import { BORDER_BOTTOM, BG_COLOR } from "../../../globalconfig";

class Settings extends Component {
  static navigationOptions = {
    title: '设置',
    headerTitleStyle: {
      fontWeight: '200',
    }
  }
  render() {
    return (
      <View style={[styles.borderB, {flexDirection: 'row', justifyContent: 'space-between', padding: 12, backgroundColor: BG_COLOR}]}>
        <Text>修改绑定手机</Text>
        <Text>18656524545 &gt;</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  borderB: BORDER_BOTTOM,
})

export default Settings;

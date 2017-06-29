import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Linking,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  TouchableHighlight,
} from "react-native";

import { BORDER_BOTTOM, BG_COLOR, APP_COLOR } from "../../globalconfig";
import { Button } from "../../components";

/*
  isFirst: 是否是列表第一个,如果是,则marginTop为12, 否则为0
  isBottom: 是否是列表最后一个,如果是,则去掉borderBottom样式,默认为有
*/
const ListItem = ({item, value, handlePress, isFirst, isLast})=> (
  <TouchableOpacity onPress={handlePress} style={{marginTop: isFirst ? 12 : 0, paddingHorizontal: 10, height: 45, backgroundColor: BG_COLOR}}>
    <View style={[isLast ? null : styles.borderB, {flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 12}]}>
      <Text style={{fontSize: 14, color: '#333'}}>{item}</Text>
      <Text style={{fontSize: 13, color: '#999'}}>{value} &gt;</Text>
    </View>
  </TouchableOpacity>
)

ListItem.defaultProps = {
  isFirst: false,
  isLast: false,
}


class Settings extends Component {
  static navigationOptions = {
    title: '设置',
    headerTitleStyle: {
      fontWeight: '100',
    }
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <ListItem item="修改绑定手机" value="18565082496" handlePress={()=> navigate('ValiPassword')} />
        <ListItem item="找回密码" isLast/>
        <ListItem item="设备操作说明" isFirst handlePress={()=> navigate("DevicesInstructionList")} />
        <ListItem item="APP操作说明" isLast handlePress={()=> navigate("OperationInstruction")} />
        <ListItem item="版本更新" value="有新版本" isFirst />
        <ListItem item="客服热线" value="0753-12385964" isLast handlePress={()=> Linking.openURL("tel: 10086")} />
        <Button style={{marginHorizontal: 10}} text="退出登录" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  borderB: BORDER_BOTTOM,
})

export default Settings;

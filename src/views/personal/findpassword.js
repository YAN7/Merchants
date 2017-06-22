import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { APP_COLOR, BORDER_COLOR, BG_COLOR, SCREEN_PIXELRADIO, BORDER_BOTTOM } from "../../../globalconfig";
import { Button } from "../../components";

class FindPassword extends Component {
  static navigationOptions = {
    title: '找回密码',
    headerTitleStyle: {
      fontWeight: '200',
    }
  }
  state = {
    phone: '',
    valiCode: '',
  }
  render() {
    const { phone, valiCode } = this.state;
    return (
      <View style={{marginHorizontal: 12}}>
        <TextInput
          style={{borderColor: '#c3c3c3', borderBottomWidth: 1/SCREEN_PIXELRADIO, paddingBottom: 10, marginTop: 80 }}
          underlineColorAndroid="transparent"
          placeholder="手机号"
          placeholderTextColor="#c3c3c3"
          selectionColor={APP_COLOR}
          value={phone}
          keyboardType='numeric'
          clearButtonMode="always"
          onChangeText={phone=> this.setState({phone})}
        />
        <View style={[BORDER_BOTTOM, {marginTop: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomColor: '#c3c3c3'}]}>
          <TextInput
            style={{flex: 1, paddingBottom: 10}}
            underlineColorAndroid="transparent"
            placeholder="验证码"
            placeholderTextColor="#c3c3c3"
            selectionColor={APP_COLOR}
            value={valiCode}
            keyboardType='numeric'
            maxLength={6}
            onChangeText={valiCode=>this.setState({valiCode})}
          />
          <Button
            style={{backgroundColor: 'transparent'}}
            textStyle={{color: APP_COLOR, fontSize: 13}}
            text="获取验证码"
          />
        </View>
        <Button
          style={{marginTop: 45}}
          text="下一步"
          disabled={!phone || !valiCode}
          // handlePress={()=> {alert(phone)}}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  borderB: BORDER_BOTTOM,
})


export default FindPassword;

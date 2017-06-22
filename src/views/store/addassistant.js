import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';

import { BG_COLOR, APP_COLOR, BORDER_COLOR, SCREEN_PIXELRADIO } from '../../../globalconfig';
import { Button } from '../../components';

class AddAssistant extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      phone: '',
      password: '',
    }
  }

  static navigationOptions = {
    title: '新增店员',
    headerRight: <Button text='保存' type='light' />
  }


  render() {
    const { name, phone, password } = this.state
    return (
      <View style={{paddingHorizontal: 15, backgroundColor: BG_COLOR}}>
        <TextInput
          style={{height: 45, padding: 0, borderStyle: 'solid', borderBottomWidth: 1/SCREEN_PIXELRADIO, borderBottomColor: BORDER_COLOR}}
          placeholder="姓名"
          placeholderTextColor="#c3c3c3"
          selectionColor={APP_COLOR}
          value={name}
          onChangeText={name=> this.setState({name})}
          underlineColorAndroid='transparent'
        />
        <TextInput
          style={{height: 45, padding: 0, borderStyle: 'solid', borderBottomWidth: 1/SCREEN_PIXELRADIO, borderBottomColor: BORDER_COLOR}}
          placeholder="手机号"
          placeholderTextColor="#c3c3c3"
          selectionColor={APP_COLOR}
          value={phone}
          onChangeText={phone=> this.setState({phone})}
          underlineColorAndroid='transparent'
        />
        <TextInput
          style={{height: 45, padding: 0, borderStyle: 'solid', borderBottomWidth: 1/SCREEN_PIXELRADIO, borderBottomColor: BORDER_COLOR}}
          placeholder="密码 (至少六位)"
          placeholderTextColor="#c3c3c3"
          selectionColor={APP_COLOR}
          value={password}
          onChangeText={password=> this.setState({password})}
          underlineColorAndroid='transparent'
        />
      </View>
    )
  }
}

export default AddAssistant;

import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";

import { APP_COLOR, BORDER_COLOR, SCREEN_PIXELRADIO, BG_COLOR } from "../../globalconfig";
import { Button } from "../../components";
import Http from "../../utils/http2";

const List = ({placeholder, type, value, handleTextChange})=> (
  <View style={styles.list_wrapper}>
    {
      type === "account"
      ? <Image style={[styles.borderR, {marginHorizontal: 10}]} source={require("../../static/img/login_user.png")} />
      : <Image style={[styles.borderR, {marginHorizontal: 10}]} source={require("../../static/img/login_password.png")} />
    }
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#c3c3c3"
      selectionColor={APP_COLOR}
      clearButtonMode="while-editing"
      underlineColorAndroid="transparent"
      secureTextEntry={ type === "account" ? false : true}
      value={value}
      onChangeText={handleTextChange}
      style={{flex: 1, padding: 0, fontSize: 16, paddingLeft: 10, borderWidth: 0}}
     />
  </View>
)

List.defaultProps = {
  type: 'account',
}

class Login extends Component {

  static navigationOptions = {
    header: null,
  }

  state = {
    account: '',
    pwd: '',
    isLoading: false,
  }

  login() {
    this.setState({isLoading: true})
    Http.post("/store/?method=auth.login", {
      phone: this.state.account,
      password: this.state.pwd,
    }, (re)=> {
      storage.save({
        key: 'userInfo',
        data: re.data,
      })
      this.props.navigation.navigate("IndexPage");
    }, null, ()=> {
      this.setState({isLoading: false})
    })
  }

  render() {
    const { account, pwd } = this.state;
    return (
      <View style={{flex:1, paddingHorizontal: 15, backgroundColor:　BG_COLOR }}>
        <View style={{alignItems: 'center'}}>
          <Image style={{width:70, height:70,marginTop: 80, marginBottom: 5}} source={require("../../static/img/login_logo.png")} />
          <Text style={{fontSize: 14, color: '#333'}}>医 美 莱 商 户 端</Text>
        </View>
        <List
          placeholder="请输入登录账号"
          value={account}
          handleTextChange={account=> this.setState({account})}
        />
        <List
          placeholder="请输入登录密码"　
          type="password"
          value={pwd}
          handleTextChange={pwd=> this.setState({pwd})}
        />
        <Text　style={{ marginTop: 12, color: APP_COLOR, textAlign: 'right'}}>忘记密码？</Text>
        <Button
          type="default"
          text="登录"
          disabled={!account || !pwd}
          isLoading={this.state.isLoading}
          handlePress={()=> this.login()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  borderR: {
    // borderStyle: 'solid',
    borderRightWidth: 1/SCREEN_PIXELRADIO,
    borderColor: BORDER_COLOR,
  },
  list_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical:5,
    borderWidth:　1/SCREEN_PIXELRADIO,
    borderStyle: 'solid',
    borderColor: BORDER_COLOR,
    marginTop: 10
  }
})

export default Login;

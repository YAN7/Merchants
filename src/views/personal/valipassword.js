import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";
import { connect } from "react-redux";

import { BG_COLOR, BORDER_COLOR, APP_COLOR, SCREEN_PIXELRADIO } from "../../globalconfig";
import { Button } from "../../components";


mapStateToProps = (state, props)=> ({
  isLoading: state.isLoading,
})

mapDispatchToProps = (dispatch, props)=> ({
  handleClick: ()=> {
    // alert()
    dispatch({type: "HAHA"})
    // alert(123)
  }
})


class ValiPassword extends Component {
  static navigationOptions = {
    title: '验证登录密码',
  }
  state = {
    pwd: '',
  }

  handlePress = ()=> {
  }


  render() {
    const { isLoading } = this.props;
    return (
      <View style={{paddingHorizontal: 12, flex: 1, backgroundColor: BG_COLOR}}>
        <TextInput
          style={{borderColor: '#c3c3c3', borderBottomWidth: 1/SCREEN_PIXELRADIO, marginTop: 80, paddingBottom: 10}}
          placeholder="请输入登录密码"
          textAlignVertical="bottom"
          placeholderTextColor="#c3c3c3"
          selectionColor= {APP_COLOR}
          underlineColorAndroid="transparent"
          secureTextEntry
          value={this.state.pwd}
          onChangeText={(text)=>this.setState({pwd: text})}
        />
        <Button
          isLoading = {this.props.isLoading}
          style={{marginTop: 45}}
          text="下一步"
          handlePress={()=>this.props.handleClick()}
        />
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ValiPassword);
// export default ValiPassword;

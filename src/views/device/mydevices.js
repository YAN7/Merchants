import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { Button } from "../../components";
import { BG_COLOR, APP_COLOR, BORDER_BOTTOM } from '../../globalconfig';

class MyDevices extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navigate: this.props.navigation.navigate,
      devicesLists: [],
    }
  }

  static navigationOptions = ({navigation})=> ({
    title: "我的设备",
    headerRight: <Button handlePress={()=> navigation.navigate("AddNewDevices")} type="light" text="新增" />,
    headerTitleStyle: {
      fontWeight: '200',
    }
  })

  componentDidMount() {
    this.getDevicesList();
  }

  // 请求设备列表
  getDevicesList() {
    Http.post("/store/?method=device.getList", { "token": "tzlvys-5b9fa43zm-rli", "store_admin_id": 10 }, re=> {
      this.setState({devicesLists: re.data})
    })
  }

  // 渲染lie b
  _renderList = (item)=> (
    <TouchableOpacity
      onPress={()=> this.props.navigation.navigate("DevicesData", {device_id: item.device_id, modelName: item.model_name})}
      key={item.device_id}
      style={styles.list_wrapper}
      >
      <Image style={{width: 50, height: 50, marginRight: 8}} source={{uri: 'http://placeholder.qiniudn.com/100x100'}} />
      <View style={[BORDER_BOTTOM, styles.list_right_wrapper]}>
        <View>
          <Text style={{color: '#333'}}>{item.device_name}</Text>
          <Text>{item.device_id}</Text>
        </View>
        <Image style={{width: 25, height: 25}} source={require("../../static/img/store_signal_icon.png")} />
      </View>
    </TouchableOpacity>
  )

  render() {
    const { devicesLists } = this.state;
    return (
      <ScrollView>
        <Text style={{paddingHorizontal: 15, paddingVertical: 12}}>启动中</Text>
        {
          devicesLists.length > 0 &&
          devicesLists.map(item=> this._renderList(item))
        }
        <Text style={{paddingHorizontal: 15, paddingVertical: 12}}>关闭中</Text>

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  list_wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BG_COLOR,
    height: 60,
    paddingLeft: 15,
  },
  list_right_wrapper: {
    paddingRight: 15,
    height: 60,
    flexDirection: "row",
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

export default MyDevices;

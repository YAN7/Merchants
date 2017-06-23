import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import { SCREEN_PIXELRADIO, APP_COLOR } from "../../../globalconfig";
import { NoItem } from '../../components';

/*
 * number 是订单或者客户的数量
 *
 */
const CardItem = ({item, note, number, image, handlePress})=> (
  <TouchableHighlight
    underlayColor="rgb(210, 230,255)"
    activeOpacity={0.5}
    style={styles.order_manager}
    activeOpacity={0.8}
    onPress={handlePress}>
    <View style={[styles.rowdisplay, styles.order_manager_content]}>
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.borderL} />
          <Text style={[{fontSize: 17, color: '#333'}]}>{ item }</Text>
        </View>
        <Text style={{fontSize: 15, color: "#999", marginTop: 10, marginLeft: 13}}>{ note }
          { (number || number == 0) && <Text style={{marginLeft: 10, color: APP_COLOR}}> { number }</Text> }
        </Text>
      </View>
      <Image style={{width: 60, height: 60}} source={ image }/>
    </View>
  </TouchableHighlight>
)

export default class Store extends Component {
  render() {
    const { navigation } = this.props;
    const title = { title: "123" }
    return (
      <ScrollView>
        {/* <NoItem {...title}/> */}
        <LinearGradient locations={[0, 0.8]} colors={['#82dcf3', '#3eadf3']} style={styles.header}>
          <View style={styles.storename}>
            <TouchableOpacity onPress={()=> navigation.navigate('Settings')}>
              <Image style={{width: 20, height: 20}} source={require("./../../static/img/store_nav_btn_back.pngstore_settings_icon.png")}/>
            </TouchableOpacity>
            <Text style={styles.store_text}>天河时尚医美店</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('MessageCenter')}>
              <Image style={{width: 20, height: 20}} source={require("./../../static/img/store_message_icon.png")} />
            </TouchableOpacity>
          </View>
          <View style={styles.turnover}>
            <View style={styles.turnover_today}>
              <Text style={{fontSize: 36, color: "#fff"}}>22134.00</Text>
              <Text style={{fontSize: 14, color: "#fff"}}>今天营业额</Text>
            </View>
            <View style={styles.turnover_month}>
              <Text style={{fontSize: 36, color: "#fff"}}>2784.00</Text>
              <Text style={{fontSize: 14, color: "#fff"}}>本月营业额</Text>
            </View>
          </View>
        </LinearGradient>
        <CardItem
          item="订单管理"
          note="今日订单"
          number="62"
          image={require("../../static/img/store_customer_icon.png")}
          handlePress={()=> navigation.navigate("OrderManager")}
        />
        <CardItem
          item="客户管理"
          note="总客户"
          number="123"
          image={require("../../static/img/store_order_icon.png")}
          handlePress={()=> navigation.navigate("CustomerManager")}
        />
        <CardItem
          item="店员管理"
          note="新添编辑员工"
          image={require("../../static/img/store_service_icon.png")}
          handlePress={()=> navigation.navigate("AssistantManager")}
        />
        <CardItem
          item="客户管理"
          note="店铺项目编辑"
          image={require("../../static/img/store_project_icon.png")}
          handlePress={()=> navigation.navigate("CustomerManager")}
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  rowdisplay: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderL: {
    borderRadius: 2,
    height: 15,
    width: 4,
    borderStyle: "solid",
    backgroundColor: APP_COLOR,
    marginRight: 8,
  },
  header: {
    height: 180,
    backgroundColor: APP_COLOR,
    alignItems: "center",
  },
  storename: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
    margin: 7,
    height: 80/SCREEN_PIXELRADIO,
    marginVertical: 15,
  },
  store_text: {
    flex: 1,
    textAlign: 'center',
    color: "#fff",
    fontSize: 18,
  },
  turnover: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    height: 118,
  },
  turnover_today: {
    flex: 1,
    alignItems: "center",
    borderRightColor: 'rgba(255, 255, 255, .4)',
    borderRightWidth: 2/SCREEN_PIXELRADIO,
    borderStyle: "solid",
  },
  turnover_month: {
    flex: 1,
    alignItems: "center",
  },
  order_manager: {
    margin: 14,
    marginBottom: 0,
    height: 100,
    paddingHorizontal: 18,
    borderRadius: 5,
    borderColor: APP_COLOR,
    shadowColor: APP_COLOR,
    elevation: 4,
    shadowOffset: {width: 0, height: 0},
    shadowColor: APP_COLOR,
    shadowOpacity: 1,
    shadowRadius: 5
  },
  order_manager_content: {
    height: 100,
  },
})

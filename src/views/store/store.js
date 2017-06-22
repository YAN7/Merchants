import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableHighlight,
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import { SCREEN_PIXELRADIO, APP_COLOR } from "../../../globalconfig";
import { NoItem } from '../../components';

export default class Store extends Component {
  render() {
    const { navigation } = this.props;
    const title = { title: "123" }
    return (
      <View>
        {/* <NoItem {...title}/> */}
        <LinearGradient locations={[0, 0.8]} colors={['#82dcf3', '#3eadf3']} style={styles.header}>
          <View style={styles.storename}>
            <Image style={{width: 20, height: 20}} source={require("./../../static/img/store_nav_btn_back.pngstore_settings_icon.png")}/>
            <Text style={styles.store_text}>天河时尚医美店</Text>
            <Image style={{width: 20, height: 20}} source={require("./../../static/img/store_message_icon.png")} />
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
        <TouchableHighlight
          underlayColor="rgb(210, 230,255)"
          activeOpacity={0.5}
          style={styles.order_manager}
          activeOpacity={0.8}
          onPress={()=> {navigation.navigate("OrderManager")}}>
          <View style={[styles.rowdisplay, styles.order_manager_content]}>
            <View style={{flex: 1}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.borderL} />
                <Text style={[{fontSize: 17, color: '#333'}]}>订单管理</Text>
              </View>
              <Text style={{fontSize: 15, color: "#999", marginTop: 10, marginLeft: 13}}>今日订单:
                <Text style={{marginLeft: 10, color: APP_COLOR}}>62</Text>
              </Text>
            </View>
            <Image style={{width: 40, height: 40}} source={require("../../static/img/store_customer_icon.png")}/>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor="rgb(210, 230,255)"  activeOpacity={0.5}  style={styles.order_manager} activeOpacity={0.8}>
          <View style={[styles.rowdisplay, styles.order_manager_content]}>
            <View style={{flex: 1}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.borderL} />
                <Text style={[{fontSize: 17, color: '#333'}]}>客户管理</Text>
              </View>
              <Text style={{fontSize: 15, color: "#999", marginTop: 10, marginLeft: 13}}>总客户:
                <Text style={{marginLeft: 10, color: APP_COLOR}}>62</Text>
              </Text>
            </View>
            <Image style={{width: 40, height: 40}} source={require("../../static/img/store_order_icon.png")}/>
          </View>
        </TouchableHighlight>
      </View>
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
    backgroundColor: 'transparent',
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
    // borderColor: APP_COLOR,
    // shadowColor: APP_COLOR,
    elevation: 4,
    // shadowOffset: {width: 0, height: 0},
    // shadowColor: APP_COLOR,
    // shadowOpacity: 1,
    // shadowRadius: 5
  },
  order_manager_content: {
    height: 100,
  },
})

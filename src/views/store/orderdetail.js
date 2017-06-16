import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";

import {APP_COLOR, BORDER_COLOR, BG_COLOR, SCREEN_PIXELRADIO} from "../../../globalconfig";

const ListItem = ({leftText, rightText, style})=> (
  <View style={styles.borderB}>
    <View style={[style, styles.row_center, {backgroundColor: BG_COLOR}]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.blue_tip}/>
        <Text style={{fontSize: 15, color: "#333"}}>{leftText}</Text>
      </View>
      <Text style={{fontSize: 15, color: APP_COLOR}}>{rightText}</Text>
    </View>
  </View>
)

class OrderDetail extends Component {
  static navigationOptions = {
    title: '订单详情',
    headerTitleStyle: {
      fontWeight: '400',
    }
  }

  render() {
    return (
      <ScrollView>
        <ListItem style={{marginBottom: 10}} leftText="交易状态" rightText="退款失败" />
        <View style={{backgroundColor: BG_COLOR}}>
          <ListItem leftText="买家信息" />
          <Text style={{color: "#4a4a4a", paddingHorizontal: 10, paddingTop: 10, paddingBottom: 6}}>联系人: 王小姐</Text>
          <Text style={{color: "#4a4a4a", paddingHorizontal: 10, paddingTop: 6, paddingBottom: 12}}>手机号: 186 6552 5684</Text>
        </View>
        <View style={{backgroundColor: BG_COLOR, marginTop: 10}}>
          <ListItem leftText="项目信息" />
          <Text numberOfLines={1} style={{color: "#4a4a4a", paddingHorizontal: 10, paddingTop: 10, paddingBottom: 6}}>项目名称: 了即可了解</Text>
          <Text style={[styles.borderB, {color: "#4a4a4a", marginHorizontal: 10, paddingTop: 6, paddingBottom: 12}]}>项目分类:  深层清洁</Text>
          <View style={styles.row_center}>
            <Text style={{fontSize: 14, color: '#999'}}>销售价</Text>
            <Text style={{fontSize: 14, color: '#999'}}>&yen; 256</Text>
          </View>
          <View style={[styles.row_center, {paddingTop: 0}]}>
            <Text style={{fontSize: 14, color: '#999'}}>优惠券</Text>
            <Text style={{fontSize: 14, color: '#999'}}>- &yen; 2.00</Text>
          </View>
          <View style={[styles.row_center, {paddingTop: 0}]}>
            <Text style={{fontSize: 15, color: '#333'}}>实收款</Text>
            <Text style={{fontSize: 15, color: APP_COLOR}}>&yen;8800.00</Text>
          </View>
        </View>
        <View style={{backgroundColor: BG_COLOR, marginTop: 10}}>
          <ListItem leftText="退款申请" />
          <Text numberOfLines={1} style={{color: "#4a4a4a", paddingHorizontal: 10, paddingTop: 10, paddingBottom: 6}}>是否已接受服务: 是</Text>
          <Text style={[styles.borderB, {color: "#4a4a4a", marginHorizontal: 10, paddingTop: 6, paddingBottom: 12}]}>选择退款原因:  无条件退款</Text>
          <Text style={[styles.borderB, {color: "#4a4a4a", marginHorizontal: 10, paddingTop: 6, paddingBottom: 12}]}>退款:
            <Text style={{color: APP_COLOR}}>&yen;0.00(全额)</Text>
          </Text>
          <Text numberOfLines={1} style={{color: "#4a4a4a", paddingHorizontal: 10, paddingTop: 10, paddingBottom: 6}}>备注: 跟想象中的效果差很多</Text>
        </View>
        <View style={{backgroundColor: BG_COLOR, marginTop: 10}}>
          <ListItem leftText="退款审核" />
          <Text numberOfLines={1} style={{color: "#4a4a4a", paddingHorizontal: 10, paddingTop: 10, paddingBottom: 6}}>商户审核:
            <Text style={{color: APP_COLOR}}>不通过</Text>
          </Text>
          <Text style={[styles.borderB, {color: "#4a4a4a", marginHorizontal: 10, paddingTop: 6, paddingBottom: 12}]}>拒绝原因:
            <Text>无条件退款无条件退款无条件退款无条件退款无条件退款无条件退款无条件退款无条件退款无条件退款无条件退款无条件退款无条件退款无条件退款无条件退款无条件退款无条件退款无条件退款无条件退款</Text>
          </Text>
          <Text style={[styles.borderB, {color: "#4a4a4a", marginHorizontal: 10, paddingTop: 6, paddingBottom: 12}]}>退款:
            <Text style={{color: APP_COLOR}}>&yen;0.00(全额)</Text>
          </Text>
          <Text numberOfLines={1} style={{color: "#4a4a4a", paddingHorizontal: 10, paddingTop: 10, paddingBottom: 6}}>备注: 跟想象中的效果差很多</Text>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  blue_tip: {
    width: 5,
    height: 18,
    backgroundColor: APP_COLOR,
    borderRadius: 2,
    marginRight: 10,
  },
  row_center: {
    flexDirection: 'row',
    justifyContent: 'space-between',
     padding: 10,
  },
  borderB: {
    borderStyle: "solid",
    borderBottomWidth: 1/SCREEN_PIXELRADIO,
    borderBottomColor: BORDER_COLOR,
  },
  item_text: {

  },
})

export default OrderDetail;

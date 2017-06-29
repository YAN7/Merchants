import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
} from "react-native";

import {APP_COLOR, BORDER_COLOR, BG_COLOR, SCREEN_PIXELRADIO} from "../../globalconfig";

const ListTitle = ({leftText, rightText, style})=> (
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

/*
  isFirstList: 是否是列表中的第一条,如果是,则marginTop为10, 否则为0
  isMarked: 是否是标记列表,如果是,则value的颜色的APP_COLOR,否则为普通颜色
*/
const ListContent = ({item, value, isFirstList, isMarked, lineNumber, style})=> (
  <View style={{flexDirection: 'row', marginHorizontal: 10, marginTop: isFirstList ? 10 : 0}}>
    <Text style={{color: "#4a4a4a", fontWeight: '200'}}>{item}:</Text>
    <Text numberOfLines={lineNumber} style={[{color: isMarked ? APP_COLOR : "#4a4a4a", margin: 10, fontWeight: '200', marginTop: 0, flex: 1}]}>{value}</Text>
  </View>
)

ListContent.defaultProps = {
  lineNumber: 1,
}

/*
  isTwoSide: 是否是两列展示,如果是,布局为space-betweent,否则为普通布局
*/
const ListTips = ({item, value, isTwoSide})=> (
  isTwoSide
  ? <View style={[styles.row_center, {paddingTop: 0}]}>
      <Text style={{fontSize: 15, color: '#333'}}>{item}</Text>
      <Text style={{fontSize: 15, color: APP_COLOR}}>{value}</Text>
    </View>
  : <View style={[styles.row_center,{ paddingTop: 0}]}>
      <Text style={{fontSize: 14, color: '#999'}}>{item}</Text>
      <Text style={{fontSize: 14, color: '#999'}}>{value}</Text>
    </View>
)

const ListWrapper = ({children})=> (
  <View style={{marginTop: 10, marginBottom: 0, backgroundColor: BG_COLOR}}>
    {children}
  </View>
)

class OrderDetail extends Component {
  static navigationOptions = {
    title: '订单详情',
    headerTitleStyle: {
      fontWeight: '400',
    }
  }

  state = {
    recordList: [{
      date: '2017-058-26',
      time: '23:18:00',
      name: '张三',
    },{
      date: '2017-058-26',
      time: '23:18:00',
      name: '李四',
    },{
      date: '2017-058-26',
      time: '23:18:00',
      name: '王五',
    }]
  }

  _renderServiceRecord = (item, index)=> (
    <View key={index} style={[styles.borderB, {paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', height: 45}]}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Image style={{width: 20, height: 20, marginRight: 10}} source={require("../../static/img/time.png")} />
        <Text>{item.date}</Text>
      </View>
      <Text style={{flex: 1, textAlign: 'center'}}>{item.time}</Text>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
        <Image style={{width: 20, height: 20, marginRight: 10}} source={require("../..//static/img/store_physician_icon.png")} />
        <Text>{item.name}</Text>
      </View>
    </View>
  )

  render() {
    return (
      <ScrollView>
        <ListTitle leftText="交易状态" rightText="退款失败" />
        <ListWrapper>
          <ListTitle leftText="买家信息" />
          <ListContent isFirstList item='联系人' value="王小姐" />
          <ListContent item="手机号" value="18565082419"/>
        </ListWrapper>
        <ListWrapper>
          <ListTitle leftText="项目信息" />
          <ListContent isFirstList item="项目名称" value="[广州玻尿酸注射美容]" />
          <ListContent item="项目分类" value="深层清洁" />
          <ListTips item="销售价" value="&yen; 256.28" />
          <ListTips item="优惠券" value="-&yen; 2.00" />
          <ListTips isTwoSide item="实收款" value="-&yen; 8800.00" />
        </ListWrapper>
        <ListWrapper>
          <ListTitle leftText="退款申请" />
          <ListContent isFirstList item="是否已接受服务" value="是" />
          <ListContent item="退款原因" value="无条件退款" />
          <ListContent item="退款金额" isMarked value="&yen; 0.00(全额)" />
          <ListContent item="备注" value="跟想象中的效果差很多" />
        </ListWrapper>
        <ListWrapper>
          <ListTitle leftText="退款审核" />
          <ListContent item="商户审核" isFirstList isMarked value="不通过" />
          <ListContent item="拒绝原因" lineNumber={10} value="开了几克拉数据库里的就开了" />
          <ListContent item="平台审核" isMarked value="不通过" />
          <ListContent item="拒绝原因" lineNumber={10} value="lkajksldjklasjdlkhjasdlkjkallk" />
        </ListWrapper>
        <ListWrapper>
          <ListTitle leftText="服务记录 (3/3)" />
          {this.state.recordList.map((item, index)=> this._renderServiceRecord(item, index))}
          <TouchableHighlight style={{alignItems: 'center', justifyContent: 'center', height: 45}}>
            <Text style={{fontSize: 14, color: "#999"}}>查看更多  &gt;</Text>
          </TouchableHighlight>
        </ListWrapper>
        <ListWrapper>
          <ListTitle leftText="订单信息" />
          <ListContent isFirstList item="订单编号" value="2017-02-02 23:00:00" />
          <ListContent item="创建时间" value="2017-02-02 23:00:00" />
          <ListContent item="取消时间" value="2017-02-02 23:00:00" />
        </ListWrapper>
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
    // paddingTop: 0,
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

import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ListView,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { TabNavigator, TabBarBottom, TabBarTop } from "react-navigation";

import { APP_COLOR, BORDER_COLOR, BG_COLOR, SCREEN_PIXELRADIO } from "../../../globalconfig";
import { NoItem } from '../../components/NoItem';

// const _renderList = ()=> (
//
// )



const TabA = ({navigation})=> (
  <TouchableHighlight style={styles.container} onPress={()=> {navigation.navigate('OrderDetail')}} >
    <View>
      <View style={[styles.borderB, styles.header]}>
        <Text numberOfLines={1} style={{width: 120}}>asdssdasd</Text>
        <Text>18565087896</Text>
      </View>
      <View style={[styles.borderB, {paddingHorizontal: 12, paddingVertical: 10,}]}>
        <Text numberOfLines={2} style={{fontSize: 15, color: '#333', fontWeight: '200', height: 40}}>之之美之美小</Text>
        <Text style={{fontSize: 11, color: '#9f9f9f'}}>套餐:  3卡</Text>
      </View>
      <Text style={{ padding: 10, alignSelf: 'flex-end', color: APP_COLOR, fontSize: 18, fontWeight: '400'}}>&yen; 8800.00
        <Text style={{fontSize: 14}}>   (-&yen; 0.00)</Text>
      </Text>
    </View>
  </TouchableHighlight>
)
TabA.navigationOptions = {
  tabBarLabel: "待服务",
}

// const title={title: "hahaha"}

const NoItemA = ({title})=> (
  <View style={{alignItems: 'center', marginTop: 50}}>
    <Image style={{width: 60}} resizeMode={"contain"} source={require("../../static/img/store_icon.png")} />
    <Text>暂无{title.title}项目</Text>
  </View>
)


// const TabB = ()=> (
//
// )

class TabB extends Component {
  static navigationOptions = {
    tabBarLabel: '服务中',
  }
  render() {
    return (
      <NoItemA title={{title: '待服务'}} />
    )
  }
}
const TabC = ()=> (
  <Text>tabC</Text>
)

TabC.navigationOptions = {
  tabBarLabel: "服务完成",
}

const TabD = ()=> (
  <Text>tabD</Text>
)

TabD.navigationOptions = {
  tabBarLabel: "退款/售后",
}

const OrderManager = TabNavigator({
  tabA: {screen: TabA,},
  tabB: {screen: TabB,},
  tabC: {screen: TabC,},
  tabD: {screen: TabD,},
}, {
  tabBarPosition: 'top',
  tabBarComponent: TabBarTop,
  tabBarOptions: {
    activeTintColor: APP_COLOR,
    inactiveTintColor: '#4a4a4a',
    indicatorStyle: {
      backgroundColor: APP_COLOR,
      width: 60,
      marginLeft: 20,
      alignSelf: 'center',
    },
    style: {
      backgroundColor: BG_COLOR,
    },
    tabStyle: {
    }
  },
  navigationOptions: {
    title: "订单管理",
  }
})

const styles = StyleSheet.create({
  rowWithCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: BG_COLOR,
    marginVertical: 10,

  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  borderB: {
    borderStyle: "solid",
    borderBottomWidth: 1/SCREEN_PIXELRADIO,
    borderBottomColor: BORDER_COLOR,
  }
})

export default OrderManager;

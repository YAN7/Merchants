/*
* @Author: heyuhang
* @Date:   2017-07-04 16:16:02
* @Last Modified by:   heyuhang
* @Last Modified time: 2017-07-10 12:04:53
*/

'use strict';
import React, { Component } from "react";
import Marquee from "@remobile/react-native-marquee";
import { View, Text, StyleSheet } from "react-native";

import { BG_COLOR, SCREEN_WIDTH, SCREEN_PIXELRADIO, BORDER_COLOR } from "../globalconfig";

const SquareItem = ({item, index})=> (
  <View key={index} style={[styles.borderB, styles.borderR, {width: SCREEN_WIDTH/3, height: 100, justifyContent: 'center', alignItems: 'center', padding: 5}]}>
    {
      item.key.length >= 7
        ? <Marquee style={{fontSize: 16, color: '#999'}}>{item.key}</Marquee>
        : <Text style={{fontSize: 16, color: '#999'}}>{item.key}</Text>
    }
    {
      item.value.length >= 7
        ? <Marquee style={{fontSize: 18, color: "#333", marginTop: 7}}>{item.value}</Marquee>
        : <Text style={{fontSize: 18, color: "#333", marginTop: 7}}>{item.value}</Text>
    }
  </View>
)

const styles =StyleSheet.create({
  borderB: {
    borderStyle: 'solid',
    borderBottomWidth: 1/SCREEN_PIXELRADIO,
    borderBottomColor: BORDER_COLOR,
  },
  borderR: {
    borderStyle: 'solid',
    borderRightWidth: 1/SCREEN_PIXELRADIO,
    borderRightColor: BORDER_COLOR,
  }
})

 export default SquareItem;

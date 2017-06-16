import React, { Component } from 'react';

import {
  Text,
  View,
  Image,
  StyleSheet,
} from "react-native";

// const NoItem = ({content})=> (
//   <View>
//     <Image source={require("../static/img/store_icon.png")} />
//     <Text>{content.title}</Text>
//   </View>
// )

const NoItem = ({title})=> (
  <View>
    <Image source={require("../static/img/store_icon.png")} />
    <Text>123</Text>
  </View>
)

export default NoItem;

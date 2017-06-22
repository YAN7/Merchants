import React, { Component } from 'react';
import PropTypes from "prop-types";

import {
  Text,
  View,
  Image,
  StyleSheet,
} from "react-native";

const NoItem = ({ image ,title})=> (
  <View style={{alignItems: 'center', marginTop: 80}}>
    <Image style={{width: 70, height: 70}} source={image} />
    <Text style={{marginTop: 10}}>{title}</Text>
  </View>
)

NoItem.propTypes = {
  // image: PropTypes.string,
  title: PropTypes.string,
}

export default NoItem;

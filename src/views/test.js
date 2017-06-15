import React from "react";
import {View, Text, StyleSheet} from "react-native";

const Test = ()=> (
  <View style={styles.container}/>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: 4,
    height: 19,
    borderRadius: 2,
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 50,
    width: 100,
    height: 100,
    textAlign: 'center',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  }
});

export default Test;

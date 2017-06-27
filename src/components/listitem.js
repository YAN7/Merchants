import React, { Component } from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { BG_COLOR, BORDER_BOTTOM } from "../../globalconfig";

/*
 * key1-key4的位置分别是从左到右,从上到下
 * image是最左侧的图片
 * sprite是key4右边的小图标,目前只在servicerecord中用到
 */

const ListItem = ({ image, key1, key2, key3, key4, sprite })=> (
  <View style={styles.container}>
    <Image style={styles.image} source={{ uri: image }} />
    <View style={[BORDER_BOTTOM, styles.left_wrapper]}>
      <View style={styles.top_content}>
        <Text style={styles.defaultKey1Style}>{ key1 }</Text>
        <Text style={styles.defaultKey2Style} >{ key2 }</Text>
      </View>
      <View  style={styles.bottom_content}>
        { key3 && <Text style={styles.defaultKey3Style}>{ key3 }</Text> }
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
          { sprite && <Image style={styles.defaultSpriteStyle} source={require('../static/img/store_physician_icon.png')} /> }
          { key4 && <Text style={styles.defaultKey4Style}>{ key4 }</Text> }
        </View>
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: BG_COLOR,
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  left_wrapper: {
    flex: 1,
    height: 60,
    paddingVertical: 10,
  },
  top_content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottom_content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  defaultKey1Style: {
    fontSize: 15,
    color: '#333',
  },
  defaultKey2Style: {
    fontSize: 15,
    color: '#666',
  },
  defaultKey3Style: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
  },
  defaultKey4Style: {
    fontSize: 12,
    color: '#999',
  },
  defaultSpriteStyle: {
    width: 15,
    height: 15,
    marginRight: 3,
  }
})

export default ListItem;

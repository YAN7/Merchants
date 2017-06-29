import React, { Component,PropTypes } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

import { APP_COLOR } from "../globalconfig";

const propTypes = {
  onPress: PropTypes.func,
  disabled: PropTypes.bool, //禁用状态，背景色变成灰色
  textStyle: Text.propTypes.style, //按钮文字的样式
  style: View.propTypes.style, //按钮的样式
  text: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
  activeOpacity: PropTypes.number, //被点击时候的透明度
  image: React.PropTypes.element, //当需要有图标时使用，放在文字前面
  isLoading:PropTypes.bool, //是否正在加载，显示一个loading转圈圈并阻止点击事件
  type: PropTypes.string
};

//给定Button的默认样式
const defaultButtonStyle = {
  borderRadius: 3,
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  marginTop: 12,
  height: 40,
  backgroundColor: APP_COLOR //默认颜色和APP主色调一样
};

const defaultTextStyle = {
  color:'#fff',
  fontSize: 18
};

// type为light的默认样式
const lightButtonStyle = {
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  backgroundColor: 'transparent',
  paddingHorizontal: 5
}

const lightTextStyle = {
  color: APP_COLOR,
  fontSize: 18
};

const Button = ({ handlePress, disabled, textStyle, style, text, type, activeOpacity, image, isLoading }) => {
  //如果是禁用状态的话背景色为固定
  let disabledButtonStyle = {};
  let disabledTextStyle = {}
  if (disabled) {disabledButtonStyle.backgroundColor = '#8dcef8';}
  if (disabled && type==='light') {
    disabledButtonStyle.backgroundColor = 'transparent';
    disabledTextStyle.color = '#8dcef8';
  }

  //  根据type设置默认样式
  let _buttonStyle, _textStyle;
  switch (type) {
    case ("default"): {
      _buttonStyle = defaultButtonStyle;
      _textStyle = defaultTextStyle;
      break;
      }
    case ("light"): {
      _buttonStyle = lightButtonStyle;
      _textStyle = lightTextStyle;
      break;
      }
    default: {
      _buttonStyle = lightButtonStyle;
      _textStyle = lightTextStyle;
      break;
      }
  }
  return (
    <TouchableOpacity
      style={[_buttonStyle, style, disabledButtonStyle]}
      onPress={isLoading ? null : handlePress}
      disabled={disabled}
      activeOpacity={activeOpacity}
    >
      {!isLoading && image ? image : null}
      {!isLoading && image ? <View style={{width:5}}></View> : null}
      {!isLoading ? <Text style={[_textStyle, textStyle, disabledTextStyle]}>{text}</Text> : null}
      {isLoading ? <ActivityIndicator size={'small'} color='#fff'/> : null}
    </TouchableOpacity>
  )};

Button.propTypes = propTypes;

Button.defaultProps = {
  onPress() {},
  disabled: false,
  activeOpacity: 0.7,
  isLoading:false,
  type: 'default',
};

export default Button;

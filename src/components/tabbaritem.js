import React, { Component } from "react";
import { Image } from "react-native";

const TabBarItem = ({focused, selectedImage, normalImage, tintColor})=> (
  <Image
    source={focused ? selectedImage : normalImage}
    style={{ tintColor, width: 20, height: 20  }}/>
)

export default TabBarItem;

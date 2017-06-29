import { Dimensions, PixelRatio, Platform } from "react-native";

// 基础样式相关
export const APP_COLOR = "#3EADF3";
export const BORDER_COLOR = "#E2E2E2";
export const BG_COLOR = "#fbfbff";

// 接口相关
export const APP_KEY = "ebd696f30f9f53ea721ef714ab99b1ba";
export const BASE_URL = "https://preview.yml360.com"

// 设备信息相关
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SCREEN_PIXELRADIO = PixelRatio.get();
export const PLATFORM = Platform.OS;

// 底部边框
export const BORDER_BOTTOM = {
  borderStyle: 'solid',
  borderBottomWidth: 1/SCREEN_PIXELRADIO,
  borderBottomColor: BORDER_COLOR,
}

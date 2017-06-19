import { Dimensions, PixelRatio, Platform } from "react-native";

export const APP_COLOR = "#3EADF3";
export const BORDER_COLOR = "#E2E2E2";
export const BG_COLOR = "#fbfbff";

// 屏幕宽高,像素比例
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SCREEN_PIXELRADIO = PixelRatio.get();

// 底部边框
export const BORDER_BOTTOM = {
  borderStyle: 'solid',
  borderBottomWidth: 1/SCREEN_PIXELRADIO,
  borderBottomColor: BORDER_COLOR,
}

// 域名相关
const BASE_URL = "https://";

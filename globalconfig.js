import { Dimensions, PixelRatio, Platform } from "react-native";

export const APP_COLOR = "#3EADF3";
export const BORDER_COLOR = "#E2E2E2";

// 屏幕宽高,像素比例
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SCREEN_PIXELRADIO = PixelRatio.get();

// 域名相关
const BASE_URL = "https://";

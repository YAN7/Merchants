import { Dimensions, PixelRatio, Platform } from "react-native";

export const APP_COLOR = "#3EADF3";
export const BORDER_COLOR = "#E2E2E2";
export const BG_COLOR = "#fbfbff";

// 设备信息相关
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SCREEN_PIXELRADIO = PixelRatio.get();
export const PLATFORM = Platform.OS;

// 域名相关
const BASE_URL = "https://";

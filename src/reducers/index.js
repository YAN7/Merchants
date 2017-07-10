import { combineReducers } from "redux";

import DevicesReducers from "./devices";
import StoreReducers from "./store";
import UserReducers from "./userinfo";

const AppReducers = combineReducers({
  StoreReducers,
  DevicesReducers,
  UserReducers,
})

export default AppReducers;

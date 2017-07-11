import { combineReducers } from "redux";

import DevicesReducers from "./devices";
import StoreReducers from "./store";
import UserReducers from "./userinfo";

const AppReducers = combineReducers({
  staore: StoreReducers,
  device: DevicesReducers,
  user: UserReducers,
})

export default AppReducers;

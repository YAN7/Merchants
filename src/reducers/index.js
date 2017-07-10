import { combineReducers } from "redux";

import DevicesReducers from "./devices";
import StoreReducers from "./store";

const AppReducers = combineReducers({
  StoreReducers,
  DevicesReducers,
})

export default AppReducers;


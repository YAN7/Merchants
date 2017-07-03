// import { combineReducers } from "redux";
//
// import DevicesReducers from "./devices";
// import StoreReducers from "./store";
//
// const AppReducers = combineReducers({
//   StoreReducers,
//   DevicesReducers,
// })
//
// export default AppReducers;


const StoreReducers = (state = {isLoading: true}, action)=> {
  switch (action.type) {
    case "SET_LOADING":
      return {
        isLoading: action.isLoading,
      }
    default:
      return state;
  }
}

export default StoreReducers;

import { ActionTypes } from "../actions";

const DevicesReducers = (state = {}, action)=> {
  switch (action.TYPE) {
    case ActionTypes.GET_DEVICE_DATA:
      return Object.assign({}, state, action.deviceData)
    default:
      return state;
  }
}

export default DevicesReducers;

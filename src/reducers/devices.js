const DevicesReducers = (state = {}, action)=> {
  switch (action.TYPE) {
    case "DEVICE_DATA":
      return {}
    default:
      return state;
  }
}

export default DevicesReducers;

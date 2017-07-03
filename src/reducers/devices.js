const DevicesReducers = (state = {}, action)=> {
  switch (action.TYPE) {
    case "DEVICE_DATA":
      return {...action.deviceData}
      break;
    default:
  }
}

export default DevicesReducers;

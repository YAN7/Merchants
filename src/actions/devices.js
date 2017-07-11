import ActionTypes from "./actiontypes";

const setDeviceData = (deviceData)=> ({
	type: ActionTypes.GET_DEVICE_DATA,
	deviceData,
})

export default {
	setDeviceData
}

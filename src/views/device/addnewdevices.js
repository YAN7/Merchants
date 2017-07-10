/*
* @Author: heyuhang
* @Date:   2017-06-29 14:40:38
* @Last Modified by:   heyuhang
* @Last Modified time: 2017-07-06 11:10:14
*/

'use strict';
import React, { Component } from "react";
import {
	View,
	Text
} from "react-native";
import { QRScannerView } from 'ac-qrcode';

class AddNewDevices extends Component {

	static navigationOptions = {
		title: "绑定设备",
		// header: null,
	}

	render() {
		return (
	    <QRScannerView
		    renderTopBarView={() => this._renderTitleBar()}
		    renderBottomMenuView={() => this._renderMenu()}
		    onScanResultReceived={ re=> this.handleSuccess(re)}
		  />
		)
	}

	handleSuccess(re) {
		const jsonre = JSON.stringify(re);
		Http.postWithAuth("/store/?method=device.active", { "device_id": re.data}, re=> {
			this.props.navigation.goBack();
		})
	}



  _renderTitleBar(){
	    return(
	        <Text
	            style={{color:'white',textAlignVertical:'center', textAlign:'center',font:20,padding:12}}
	        >这里添加标题</Text>
	    );
	}

	_renderMenu() {
	    return (
	        <Text
	            style={{color:'white',textAlignVertical:'center', textAlign:'center',font:20,padding:12}}
	        >这里添加底部菜单</Text>
	    )
	}

// barcodeReceived(e) {
// 	    Toast.show('Type: ' + e.type + '\nData: ' + e.data);
// 	    //console.log(e)
// 	}
}

export default AddNewDevices;
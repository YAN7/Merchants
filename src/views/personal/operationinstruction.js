/*
* @Author: heyuhang
* @Date:   2017-06-27 15:52:03
* @Last Modified by:   heyuhang
* @Last Modified time: 2017-06-30 11:34:53
*/

'use strict';
import { connect } from "react-redux";
import React, { Component } from "react";
import {
	ActivityIndicator,
	WebView,
	ScrollView,
} from "react-native";

import { setLoading } from "../../actions";
import { BG_COLOR } from "../../globalconfig";

class OperationInstruction extends Component {

	state = {
		content: ""
	}

	static mapStateToProps = (state, props)=> ({
		isLoading: state.isLoading
	})

	static mapDispatchToProps = (dispatch, props)=> ({
		requestSuccess: (isLoading)=> {
			dispatch(setLoading(isLoading))
		},
		setLoadingToFalse: ()=> {

		}
	})

	componentDidMount() {
		Http.post("/store/?method=info.appReadme", {type: 1}, (re)=> {
			this.setState({content: re.data.content})
		}, (error)=> {
			alert(error.msg);
		}, ()=> {
			this.props.requestSuccess(false);
		})
	}

	componentWillUnmount() {
		this.props.requestSuccess(true);
	}

	static navigationOptions = {
		title: "APP操作说明",
	}

	render () {
		const { content } = this.state;
		return (
			this.props.isLoading
			? <ActivityIndicator/>
			: <WebView style={{paddingTop: 100, backgroundColor: BG_COLOR, flex: 1}} source={{html: this.state.content}} />
		)
	}
}

export default connect(OperationInstruction.mapStateToProps, OperationInstruction.mapDispatchToProps)(OperationInstruction);
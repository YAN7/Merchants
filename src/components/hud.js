/*
* @Author: heyuhang
* @Date:   2017-07-04 12:09:53
* @Last Modified by:   heyuhang
* @Last Modified time: 2017-07-04 14:42:59
*/

'use strict';
import PropTypes from "prop-types";
import React, { Component } from "react";
import Toast from 'react-native-easy-toast';
import { View, StyleSheet, ActivityIndicator } from "react-native";

class Hud extends Component {
	state = {
		block: false,
		animating: false,
	}

	showLoading = (block)=> {
		this.setState({
			block: block || false,
			animating: true,
		})
	}

	hideLoading = ()=> {
		this.setState({
			block: false,
			animating: false,
		})
	}

	showMessage = message=> {
		this.toast.show(message)
	};

	render() {

		const { block, animating } = this.state;

		return (
			<View pointerEvents={block ? "none" : "auto"} style={styles.containers}>
				{animating && (
					<View style={styles.indicator}>
						<ActivityIndicator
							color="white"
							size="large"
							animating={animating}
						/>
					</View>
				)}
				<Toast
					ref={toast=> this.toast = toast}
					position="center"
					style={styles.hud}
					opacity={0.7}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  containers: {
    position:'absolute',
    top:0,
    bottom:0,
    left:0,
    right:0,
    justifyContent:'center',
    alignItems:'center',
  },
  indicator: {
    width: 80,
    height: 80,
    borderRadius: 10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#00000080',
  },
  hud: {
    paddingHorizontal:32,
    paddingVertical:25,
    backgroundColor:'#000000',
  },
})

export default Hud;
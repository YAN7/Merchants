import React, {
	Component,
} from 'react';
import {
	AppRegistry,
	ListView,
	StyleSheet,
	Text,
	ScrollView,
	TouchableOpacity,
	TouchableHighlight,
	View,
} from 'react-native';

import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';

class Test extends Component {


	render() {
		return (
			<View style={{flex: 1}}>
				<ScrollView style={{flex: 1, backgroundColor: 'blue'}}>
				</ScrollView>
				<View style={styles.bottom} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	top: {
		backgroundColor: 'red',
		flex: 1,
	},
	bottom: {
		backgroundColor: 'green',
		height: 50,
		position:'absolute',
    bottom:0,
    left:0,
    right:0,
    justifyContent:'center',
    alignItems:'center',
	},
})

export default Test;

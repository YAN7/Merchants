import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  ListView,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

import { SCREEN_PIXELRADIO, BORDER_COLOR, BG_COLOR } from "../../../globalconfig";
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';

class CustomerManager extends Component {
  static navigationOptions = {
    title: '用户管理',
    headerTitleStyle: {
      fontWeight: '200',
    }
  }

  ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
  // ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

  state = {
    listData: [{
      url: 'http://placeholder.qiniudn.com/100x100',
      name: 'Mima',
      phone: '18565082545',
    },{
      url: 'http://placeholder.qiniudn.com/100x100',
      name: 'Mini',
      phone: '18565082545',
    },{
      url: 'http://placeholder.qiniudn.com/100x100',
      name: 'Miha',
      phone: '18565082545',
    }],
    lists: Array(20).fill(' ').map((_, i)=> `item${i}`)
  }

  _renderTest = ({navigation})=> (
    <SwipeListView
      dataSource = {this.ds.cloneWithRows(this.state.listData)}
      renderRow = { (item, index)=> this._renderList(item, index, ()=> this.handlePress(item)) }
      renderHiddenRow = {(data, secId, rowId, rowMap)=>
        <View style={{ flexDirection: "row", justifyContent: "flex-end"}}>
          <TouchableOpacity
            onPress={()=> {navigation.navigate("EditCustomerRemark", {name: data.name})}}
            style={{backgroundColor: "#3eadf3", width: 100, height: 60, justifyContent: "center", alignItems: "center"}}>
            <Text style={{color: "#fff"}}>修改备注</Text>
          </TouchableOpacity>
        </View>
      }
      disableRightSwipe={true}
      rightOpenValue={-100}
      swipeToOpenPercent={30}
      closeOnRowBeginSwipe={true}
    >

    </SwipeListView>
  )

  _deleteRow = (secId, rowId, rowMap)=> {
    rowMap[`${secId}${rowId}`].closeRow();
    const newData = [...this.state.listData];
    newData.splice(rowId, 1);
    this.setState({listData: newData})
  }

  _renderList = (item, index, handlePress)=> (
      <TouchableHighlight onPress={handlePress}>
        <View style={[styles.borderB, {backgroundColor: BG_COLOR, flexDirection: 'row', height: 60, padding: 10}]}>
          <Image style={{width: 40, height: 40, borderRadius: 20, marginRight: 12,}} source={{ uri: 'http://placeholder.qiniudn.com/100x100'}} />
          <View style={{flex: 1}}>
            <Text style={{fontSize: 15, color: '#333'}}>{item.name}</Text>
            <Text  style={{fontSize: 12, color: '#666', marginTop: 2}}>{item.phone}</Text>
          </View>
        </View>
      </TouchableHighlight>
  )

  handlePress = (item) => {
    this.props.navigation.navigate("CustomDetail",{name: item.name});
  }

  render() {
    const {listData} = this.state;
    const {navigation} = this.props;
    return (
      <View>
        { this._renderTest({navigation}) }
      </View>
    )
  }
}

 const styles = StyleSheet.create({
   borderB: {
     borderStyle: 'solid',
     borderBottomWidth: 1/SCREEN_PIXELRADIO,
     borderBottomColor: BORDER_COLOR,
   },
});


export default CustomerManager;

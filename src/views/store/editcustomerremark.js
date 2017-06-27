import React, {Component} from "react";
import {
  Text,
  TextInput,
  View,
} from "react-native";

import { Button } from "../../components";
import { APP_COLOR, BORDER_BOTTOM, BG_COLOR } from "../../../globalconfig";

class EditCustomerRemark extends Component {
  static navigationOptions = {
    title: "修改备注",
  }

  state = {
    // name: this.props.navigation.state.params.name || "",
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: BG_COLOR, paddingHorizontal: 10, paddingTop: 80}}>
        <TextInput
          style={[BORDER_BOTTOM, { padding: 10, borderBottomWidth: 1 }]}
          underlineColorAndroid = "transparent"
          selectionColor={ APP_COLOR }
        />
        <Button text="保存" style={{marginTop: 60}} />
      </View>
    )
  }
}


export default EditCustomerRemark;

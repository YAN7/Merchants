import React, {Component} from "react";
import {
  Text,
  TextInput,
  View,
} from "react-native";

import { Button } from "../../components";

class EditCustomerRemark extends Component {
  static navigationOptions = {
    title: "修改备注",
  }

  state = {
    // name: this.props.navigation.state.params.name || "",
  }

  render() {
    return (
      <TextInput
        style={{padding: 5}}
        // defaultValue={this.state.name}
      />
    )
  }
}


export default EditCustomerRemark;

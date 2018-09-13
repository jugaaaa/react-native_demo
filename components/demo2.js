import React, {Component} from 'react';
import {TextInput, Button, Text, View} from 'react-native';

export default class ControllerComponent extends Component {
  state = {
    value: 'Input something here'
  }
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({value})
  }
  render() {
    return (
      <View style={{width: 300}}>
        <Text>{this.state.value}</Text>
        <TextInput
          style={{height: 20, borderColor: 'gray', borderWidth: 1}}
          placeholder={this.state.value}
          onChangeText={this.handleChange}
          />
      </View>
    );
  }
}
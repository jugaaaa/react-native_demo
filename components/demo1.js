import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Toast} from 'react-native';

export default class Demo1 extends Component {
  constructor(props) {
      super(props);
      this.ok = 'okkkk';
      this.arrow = 'arrowwww';
      this.good = 'goodddd'
      this.handleClick = this.handleClick.bind(this);
    }

     /**
      * 在构造函数中绑定this,建议使用
      */
    handleClick() {
      alert(this.ok);
    };

    /**
     * 使用的时候用箭头函数调用,不建议使用
     */
     handleClick_Arrow() {
      alert(this.arrow);
    };

    /**
     * 直接使用箭头函数声明,不建议使用
     */
     _handleClick = () => {
       alert(this.good);
    }

  render() {
    const buttonName = '点我';
    const button1Name = '点我试试';
    const button2Name = '箭头函数不绑定到构造函数中';
    return (
      <View>
        <Button title={buttonName} onPress={this.handleClick} />
        <Button title={button1Name} onPress={() => this.handleClick_Arrow()} />
        <Button title={button2Name} onPress={this._handleClick} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

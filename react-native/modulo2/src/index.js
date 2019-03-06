import './config/ReactotronConfig';
import './config/DevToolsConfig';
import React, { Component } from 'react';
import {
  StyleSheet, View, Platform, Text,
} from 'react-native';

// console.tron.log('Hello WOrlds');

export default class App extends Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <Text>APLICATIVO</Text>
      </View>
    );
  }
}

const bgColor = '#333';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: bgColor,
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

import './config/ReactotronConfig';
import './config/DevToolsConfig';
import React, { Component } from 'react';
import {
  StyleSheet, View, Platform, Text,
} from 'react-native';
import Routes from '~/routes'
// console.tron.log('Hello WOrlds');

export default class App extends Component {
  state = {};

  render() {
    return (
      <Routes/>
    );
  }
}
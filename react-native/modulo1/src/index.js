import './config/ReactotronConfig';
import './config/DevToolsConfig';
import React, { Component } from 'react';
import { StyleSheet, View, Platform, Text } from 'react-native';
import Todo from '~/components/Todo';

console.tron.log('Hello WOrlds');

export default class App extends Component {
  state = {
    counter: 0,
    text: '',
    todos: [
      {
        id: 0,
        text: 'Fazer Café',
      },
      {
        id: 1,
        text: 'Estudar GO native',
      },
    ],
  };

  handleAddCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  addTodo = () => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: Math.random(),
          text: 'Estudar GO native22',
        },
      ],
    });
  };

  render() {
    console.log('teste');
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' ? <Text style={styles.text}>IOS</Text> : <Text style={styles.text}>Android</Text>}
        <Todo title="Fazer café" />
        <Todo title="Fazer café2" />
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
  text: {
    ...Platform.select({
      ios: {
        fontWeight:'bold'
      },
      android:{
        fontSize: 36
      }
    }),
  },
});

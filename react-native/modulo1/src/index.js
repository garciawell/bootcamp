import './config/ReactotronConfig';
import './config/DevToolsConfig';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Todo from './components/Todo';
// import Todo from '~/components/Todo';

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
        <Todo title="Fazer café" />
        <Todo title="Fazer café2" />
      </View>
    );
  }
}

const bgColor = '#333';

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    backgroundColor: bgColor,
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

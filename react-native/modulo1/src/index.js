import './config/ReactotronConfig';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

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

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        text: 'Hello Worlds',
      });
    }, 3000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.counter < 5;
  }

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

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
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
    );
  }
}

const bgColor = '#333';

const styles = StyleSheet.create({
  box: {
    height: 80,
    margin: 10,
    transform: [{ rotateZ: '20deg' }],
    width: 80,
  },
  container: {
    alignContent: 'center',
    backgroundColor: bgColor,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

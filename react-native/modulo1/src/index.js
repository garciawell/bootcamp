import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import Todo from "./components/Todo";

export default class App extends Component {
  state = {
    counter: 0,
    text: "",
    todos: [
      {
        id: 0,
        text: "Fazer Café"
      },
      {
        id: 1,
        text: "Estudar GO native"
      }
    ]
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        text: "Hello Worlds"
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
      counter: this.state.counter + 1
    });
  };

  addTodo = () => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: Math.random(),
          text: "Estudar GO native22"
        }
      ]
    });
  };

  render() {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#333",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center"
  },
  box: {
    width: 80,
    height: 80,
    margin: 10,
    backgroundColor: "#f00",
    transform: [{ rotateZ: "20deg" }]
  }
});

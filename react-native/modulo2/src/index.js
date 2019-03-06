import './config/ReactotronConfig';
import './config/DevToolsConfig';
import React, { Component } from 'react';
import createNavigator from '~/routes';
import { AsyncStorage } from 'react-native';
// console.tron.log('Hello WOrlds');

export default class App extends Component {
  state = {
    userChecked: false,
    userLogged: false,
  };

  async componentDidMount() {
    const username = await AsyncStorage.getItem('@Gihuber:username');

    this.setState({
      userChecked: true,
      userLogged: !!username,
    });
  }

  render() {
    const { userChecked, userLogged } = this.state;
    if (!userChecked) return null;

    const Routes = createNavigator(userLogged);

    return <Routes />;
  }
}

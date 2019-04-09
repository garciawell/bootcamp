import './config/ReactotronConfig';
import './config/DevToolsConfig';
import React, { Component } from 'react';
import createNavigator from '~/routes';
import { AsyncStorage } from 'react-native';
import CodePush from 'react-native-code-push';
import OneSignal from 'react-native-onesignal';

class App extends Component {
  constructor(props) {
    super(props);

    OneSignal.init('d6562eb1-eec6-4af5-ac5d-64d983501e38');
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  state = {
    userChecked: false,
    userLogged: false,
  };

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived = (data) => {};

  onOpened = (notification) => {};

  onIds = (id) => {};

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

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(App);

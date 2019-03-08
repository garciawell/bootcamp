import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.56.1' }) // controls connection & communication settings
    .useReactNative()
    .use(reactotronRedux())
    .connect(); // let's connect!

  console.tron = tron;

  tron.clear();
}

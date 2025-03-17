/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import test from './src/screens/welcome';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => test);

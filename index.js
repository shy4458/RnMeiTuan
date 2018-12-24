/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MaterialApp from './js/MaterialApp'


AppRegistry.registerComponent(appName, () => MaterialApp);

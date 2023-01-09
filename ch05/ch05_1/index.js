/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
<<<<<<< HEAD
=======

if (Platform.OS === 'web') {
    const rootTag = document.getElementById('root') || document.getElementById(name);
    AppRegistry.runApplication(name, { rootTag });
}
>>>>>>> 2a9154dad4f49ad705fa5fab7d47b6f6aa5af9b9

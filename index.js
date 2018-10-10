import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Login',
      screen: 'example.FirstTabScreen', // this is a registered name for a screen
      icon: require('./android.png'),
      //selectedIcon: require('../img/one_selected.png'), // iOS only
      navigatorStyle : {
        navBarHidden : true
      }
    },
    {
      label: 'Biodata',
      screen: 'example.SecondTabScreen',
      icon: require('./android.png'),
      //selectedIcon: require('../img/two_selected.png'), // iOS only
      navigatorStyle : {
        navBarHidden : true
      }
    }
  ]
});
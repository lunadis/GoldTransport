import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Hall from './views/hall/index';
import Auth from './views/auth/index';
import Signup from './views/Signup/index';
import Home from './views/home/index'


const Application = createStackNavigator(
  {
    hall: {screen: Hall},
    auth: {screen: Auth},
    signup: {screen: Signup},
    home: {screen: Home}
  },
  {headerMode: 'none'},
);

const AppContainer = createAppContainer(Application);

export default class App extends Component {
  render() {
    return <Home />;
  }
}

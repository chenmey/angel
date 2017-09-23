import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './homescreen';
import ResultsScreen from './resultsscreen';
import LoginScreen from './loginscreen';

const SimpleApp = StackNavigator({
    Login: { screen: LoginScreen },
    Home: { screen: HomeScreen },
    Results: { screen: ResultsScreen },
});

export default SimpleApp;


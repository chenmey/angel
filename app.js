import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './homescreen';
import ResultsScreen from './resultsscreen';

const SimpleApp = StackNavigator({
    Home: { screen: HomeScreen },
    Results: { screen: ResultsScreen },
});

export default SimpleApp;


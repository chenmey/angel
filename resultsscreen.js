/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {ActivityIndicator, ListView, TouchableOpacity, AppRegistry, StyleSheet, Text, TextInput, View } from 'react-native';
import ResultEntry from './resultEntry';

export default class ResultsScreen extends Component {
    

    
 constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }
    
  static navigationOptions = {
    title: 'Results',
  };
    
render() {
    const { params } = this.props.navigation.state;
    console.log('BLABLA ' + JSON.stringify(params.user))
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
//          renderRow={(rowData) => <ResultEntry title={rowData.title} year={rowData.releaseYear}></ResultEntry>}
          renderRow={(rowData) => <ResultEntry title={params.user.name} year={rowData.releaseYear}></ResultEntry>}
        />
      </View>
    );
}

//componentDidMount() {
//    return fetch('https://facebook.github.io/react-native/movies.json')
//      .then((response) => response.json())
//      .then((responseJson) => {
//        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//        this.setState({
//          isLoading: false,
//          dataSource: ds.cloneWithRows(responseJson.movies),
//        }, function() {
//          // do something with new state
//        });
//      })
//      .catch((error) => {
//        console.error(error);
//      });
//  }

    componentDidMount() {
        let customData = require('./customData.json');
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(customData.movies),
        }, function() {
          // do something with new state
        });
    }

}
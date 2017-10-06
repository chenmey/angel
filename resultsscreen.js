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
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    if (this.state.name !== undefined) {
        return (
          <View>
            <Text>{this.state.name}</Text>
            <ListView
              dataSource={this.state.reviews}
              renderRow={(rowData) => <ResultEntry stars={rowData.stars} text={rowData.text}></ResultEntry>}
            />
          </View>
        );
    }
    
    return (
        <View>
            <Text> Didnt found any match for this phone number </Text>
        </View>
        
        );
}


    componentDidMount() {
        this.getProfessionalReviewsFromAPI();
    }

    async getProfessionalReviewsFromAPI() {
        const { params } = this.props.navigation.state;
        try {
          let response = await fetch(`https://intense-sierra-94321.herokuapp.com/professionals/get_professional_by_phone/${params.phone}`, {
              method: 'GET',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            });
          let responseJson = await response.json();
          let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.setState({
            isLoading: false,
            name: responseJson.name,
              reviews: ds.cloneWithRows(responseJson.reviews),
            }, function() {
              // do something with new state
            });
        } catch(error) {
            this.setState({
            isLoading: false,
            }, function() {
              // do something with new state
            });
        }

    }   
}
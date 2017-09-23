/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { TouchableOpacity, AppRegistry, StyleSheet, Text, TextInput, View } from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
    header: null,
  };

    render() {  
      const { navigate } = this.props.navigation
    const { params } = this.props.navigation.state
    console.log('BLABLA ' + params.user)
    return (
      <View style={styles.container}>
        <TextInput
          style={{height: 40}}
          placeholder="הכנס מספר טלפון של נותן השירות" 
          onChangeText={(phoneNumber) => this.setState({phoneNumber})}
        />

        <TouchableOpacity
           style = {styles.submitButton}
           onPress = {
                () => navigate('Results', {user: params.user})
           }>
           <Text style = {styles.submitButtonText}> שלח </Text>
        </TouchableOpacity>
      </View>
    );
    }
}

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
});
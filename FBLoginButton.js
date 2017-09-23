import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import {LoginButton} from 'react-native-fbsdk';

export default class FBLoginButton extends Component {
  render() {
    return (
      <View>
        <LoginButton
          readPermissions={["public_profile", 'email']}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + result.error);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                alert("Login was successful with permissions: " + result.grantedPermissions)
              }
            }
          }
          onLogoutFinished={() => alert("User logged out")}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({

    container: {
        backgroundColor: 'green',
        margin: 10,
    },

  title: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  year: {
    color: 'red',
  },
});
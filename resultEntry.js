import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class ResultEntry extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{this.props.stars}</Text>
            <Text style={styles.year}>{this.props.text}</Text>
        </View>
    );
  }
}


const styles = StyleSheet.create({

    container: {
        backgroundColor: 'green',
        margin: 10,
    },

  stars: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text: {
    color: 'red',
  },
});
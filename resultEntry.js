import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class ResultEntry extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{this.props.title}</Text>
            <Text style={styles.year}>{this.props.year}</Text>
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
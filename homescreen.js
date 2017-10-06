/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { TouchableOpacity, AppRegistry, StyleSheet, Text, TextInput, View} from 'react-native';
import Modal from 'react-native-modal';

export default class HomeScreen extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
        }   
    }
    
    static navigationOptions = {
        title: 'Home',
        header: null,
    };

    toggleModal(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {  
        const { navigate } = this.props.navigation
        const { params } = this.props.navigation.state
        return (
          <View style={styles.container}>
            <TextInput
              style={{height: 40}}
              placeholder="הכנס מספר טלפון של נותן השירות" 
              onChangeText={(phoneNumber) => this.setState({phoneNumber})}
            />

            <TouchableOpacity
                style = {styles.button}
               onPress = {
                    () => navigate('Results', {phone: this.state.phoneNumber})
               }>
               <Text> שלח </Text>
            </TouchableOpacity>

            <Modal animationType = {"slide"} transparent = {true}
               visible = {this.state.modalVisible}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>
               <View style = {styles.modalContent}>
                  <Text>Modal is open!</Text>
                  
                  <TouchableOpacity style = {styles.button} onPress = {() => {
                     this.toggleModal(!this.state.modalVisible)}}>
                     
                     <Text>Close Modal</Text>
                  </TouchableOpacity>
               </View>
            </Modal>

            <TouchableOpacity
               style = {styles.button}
               onPress = {
                    () => this.toggleModal(true)
               }>
               <Text> הכנס ביקורת </Text>
            </TouchableOpacity>
          </View>
        );
    }
}

const styles = StyleSheet.create({
   container: {
          flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   button: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});
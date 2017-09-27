/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { ActivityIndicator, AppRegistry, StyleSheet, Text, TextInput, View, Button, AsyncStorage, Image,TouchableOpacity } from 'react-native';
import { LoginManager, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk'



export default class LoginScreen extends Component {
    static navigationOptions = {
        header: null,
        header: null,
        header: null,
    };

  constructor(props) {
    super(props);
    this.state = {
        user: {},
        isLoading: true,
        isLoggedIn: false
    }
  }


async checkIfLoggedIn () {

    const { navigate } = this.props.navigation
    let val = await  AsyncStorage.getItem("user");

    if (val != null) {
        this.setState({user: val});
    }

    AccessToken.getCurrentAccessToken().then(
            (data) => {
                if (data.hasOwnProperty('expirationTime') && data.expirationTime != null) {
                    let now = new Date();
                    if (data.expirationTime - now > 0) {
                        this.setState({
                            isLoading: false,
                            isLoggedIn: true
                        })
                        navigate('Home', {user: JSON.parse(this.state.user)})
                    }
                    else {
                        this.setState({
                            isLoading: false,
                            isLoggedIn: false
                        })
                    }

                }
                else {
                        this.setState({
                            isLoading: false,
                            isLoggedIn: false
                        })
                }
            }
    );


}

  componentDidMount() {
      this.checkIfLoggedIn();

  }




initUser (res) {
    this.setState({
      user: res
    }, function() {
      // do something with new state
    });
    AsyncStorage.setItem("user", JSON.stringify(res));
}

handleFacebookLogin (navigate) {
    LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_friends']).then(
      function (result) {
        if (result.isCancelled) {
          console.log('Login cancelled')
        } else {

           let req = new GraphRequest('/me', {
                httpMethod: 'GET',
                version: 'v2.5',
                parameters: {
                    'fields': {
                        'string' : 'email,name'
                    }
                }
            }, (err, res) => {
                this.initUser(res)
                navigate('Home', {user: this.state.user})
            });

            new GraphRequestManager().addRequest(req).start();


        }
      }.bind(this),
      function (error) {
        alert('Login fail with error: ' + error)
      }
    )
  }

    render() {
    const { navigate } = this.props.navigation;
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }


    return (

        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('./res/angel.png')}
                />
                <Text style={styles.title}>אנג׳ל</Text>
                <Text style={styles.description}>משתפים מידע אודות בעלי מקצוע</Text>
            </View>
            <View style={styles.loginContainer}>
               <TouchableOpacity
                    onPress={() => this.handleFacebookLogin(navigate)}
                    style={styles.fbButton}
                    >
                               <Text style = {styles.fbButtonText}>התחבר עם פייסבוק</Text>
                                <Image style={styles.fbLogo} source={require('./res/fbWhiteIcon.png')} />
                    </TouchableOpacity>
            </View>
        </View>




    );
    }
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor:'#3498db',
   },
    logoContainer: {
       alignItems: 'center',
       flexGrow: 1,
        justifyContent: 'center',
   },
    logo: {
        width: 200,
        height: 200,
    },
   title:{
      color: 'white',
       textAlign: 'center',
       fontSize: 40,
       marginTop:10,
       opacity: 0.9,
   },
    loginContainer: {
       alignItems: 'center',
       flexGrow: 1,
   },
   description:{
      color: 'white',
       textAlign: 'center',
      opacity: 0.9,

   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   fbButton: {
      flexDirection: 'row',
      marginTop: 40,
      backgroundColor: '#4267B2',
      paddingVertical: 15,
      paddingLeft: 20,
      paddingRight: 20,


   },
   fbButtonText:{
      color: 'white',
   },
    fbLogo: {
        height: 20,
        width: 20,
        marginLeft: 2,
    }
});

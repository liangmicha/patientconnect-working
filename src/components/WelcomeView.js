import React from 'react-native';
var Parse = require('parse/react-native');
var Router = require('react-native-router');
import SignUpView from './SignUpView';
import LoginView from './LoginView';

const {
  BackAndroid,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  Navigator,
  NativeModules,
} = React;

var WelcomeView = React.createClass({
  getInitialState: function() {
    return {
      view: 'WelcomeView'
    }
  },
  switchtoView1: function() {
      this.setState({view: 'LoginView'});
  },
  switchtoView2: function() {
      this.setState({view: 'SignUpView'});
  },
  render: function() {
    if (this.state.view == 'WelcomeView') {
      return (
          <View style={styles.container}>
              <View style={styles.navbar}>
                <Text style={[styles.base, styles.back]} onPress={this.switchtoView1}>Login</Text>
                <Text style={[styles.base, styles.forward]} onPress={this.switchtoView2}>Sign up</Text>
              </View>
              <View>
                  <Text> Welcome to PatientConnect </Text>
              </View>
          </View>
      );
    } else if (this.state.view == 'LoginView') {
      return (
          <LoginView>
          </LoginView>
      )
    } else if (this.state.view == 'SignUpView') {
      return (
          <SignUpView>
          </SignUpView>
      )
    }
  }
});

var styles = StyleSheet.create({
    container: {
        marginTop: 100,
        padding: 20
    },
    navbar: {
        flexDirection: 'row',
        marginBottom: 30,
    },
    base: {
        fontSize: 20,
        color: 'blue'
    },
    back: {
        flex: 1
    },
    forward: {}
});


module.exports = WelcomeView;
import React from 'react-native';
var Parse = require('parse/react-native');
import SignUpView from './SignUpView';
import MainView from './MainView';
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

var MySceneComponent = React.createClass({
    switchToLoginView: function() {
      this.props.onGoto('Login');
    },
    switchToSignUpView: function() {
      this.props.onGoto('SignUp');
    },
    render: function() {
        if (this.props.name.indexOf('Welcome') == 0) {
          var message = WELCOME_TEXTS[this.props.name];
          return (
              <View style={styles.container}>
                  <View style={styles.navbar}>
                    <Text style={[styles.base, styles.back]} onPress={this.switchToLoginView}>Login</Text>
                    <Text style={[styles.base, styles.forward]} onPress={this.switchToSignUpView}>Sign up</Text>
                  </View>
                  <View>
                      <Text> {message} </Text>
                  </View>
              </View>
          );
        } else if (this.props.name.indexOf('SignUp') == 0) {
          return (
              <SignUpView onGoto={this.props.onGoto}>
              </SignUpView>
          );
        } else if (this.props.name.indexOf('MainView') == 0) {
          // If we don't have permission, should not render. view.
          var lst = this.props.name.split('_');
          // TODO make sure list is 2. If not you are in big trouble :(
          var whichTab = lst[1];
          return (
              <MainView whichTab={whichTab} onGoto={this.props.onGoto} mainViewName={this.props.name}>
              </MainView>
          );
        } else if (this.props.name.indexOf('Login') == 0) {
          // TODO some logic to take to mainview if person is already logged in.
          return (
              <LoginView onGoto={this.props.onGoto}>
              </LoginView>
          )
        } else {
          return (
            <View style={styles.survey}>
              <Text>
                Sorry, I do not know what this page is about. {this.props.name}
              </Text>
            </View>
          );
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


module.exports = MySceneComponent;
'use strict';

var React = require('react-native');
var Parse = require('parse/react-native');
var { AppRegistry, StyleSheet, Text, View, TextInput, TouchableHighlight, NativeModules } = React;


var LoginView = React.createClass({
  onSignInSuccess: function(user) {
      this.props.onGoto("MainView");
  },
  // Todo code this up to check to make sure things are valid.
  signIn: function(onSuccessCallBack) {
    // Check if they are arleady logged it!
    Parse.User.logIn(this.state.username, this.state.password, {
      success: function(user) {
        // Do stuff after successful login.
        onSuccessCallBack(user);
      },
      error: function(user, error) {
        // The login failed. Check error to see why.
        NativeModules.MyCustomModule.show(error.message);
        Parse.User.logOut();
      }
    });
  },
  getInitialState() {
    return {
      username: '',
      password: '',
      phone: '',
      email: ''
    }
  },
  render() {
    return (
      <View>
        <TextInput
          placeholder='username'
          value={this.state.username}
          onChangeText={(text) => this.setState({
            username: text
          })}>
        </TextInput>
        <TextInput
          placeholder='password'
          value={'*'.repeat(this.state.password.length)}
          onChangeText={(text) => this.setState({
            password: text
          })}>
        </TextInput>
        <TouchableHighlight
          onPress={this.signIn.bind(this, this.onSignInSuccess)}>
          <Text>Submit</Text>
        </TouchableHighlight>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

module.exports = LoginView;
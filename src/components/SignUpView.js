'use strict';

var React = require('react-native');
var Parse = require('parse/react-native');
var { AppRegistry, StyleSheet, Text, View, TextInput, TouchableHighlight, NativeModules } = React;


var SignUpView = React.createClass({
  // Todo code this up to check to make sure things are valid.
  onPressSubmit: function() {
    var state = 'First name: ' + this.state.username + '\n' +
                'Password: ' + this.state.password + '\n' +
                'Phone number: ' + this.state.phone + '\n' + 
                'Email: ' + this.state.email + '\n';
    
  },
  onSuccessLogin: function() {
    // DO SOMETHING like go to Login view.
    this.props.onGoto('Login');
  },
  signUp: function(onSuccessCallBack) {
        var user = new Parse.User();
        user.set("username", this.state.username);
        user.set("password", this.state.password);
        user.set("phone", this.state.phone);
        user.set("email", this.state.email);
        user.signUp(null, {
          success: function(user) {
            // Hooray! Let them use the app now.
            onSuccessCallBack();
          },
          error: function(user, error) {
            // Show the error message somewhere and let the user try again.
            NativeModules.MyCustomModule.show(error.message);
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
        <TextInput
          placeholder='email'
          value={this.state.email}
          onChangeText={(text) => this.setState({
            email: text
          })}>
        </TextInput>
        <TextInput
          placeholder='Phone Number'
          value={this.state.phone}
          onChangeText={(text) => this.setState({
            phone: text
          })}
          keyboardType='numeric'>
        </TextInput>
        <TouchableHighlight
          onPress={this.signUp.bind(this, this.onSuccessLogin)}>
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

module.exports = SignUpView;
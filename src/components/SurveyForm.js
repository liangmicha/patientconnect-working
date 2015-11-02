'use strict';

var React = require('react-native');
var { AppRegistry, StyleSheet, Text, View, TextInput, TouchableHighlight, NativeModules } = React;


var SurveyForm = React.createClass({
  // Todo code this up to check to make sure things are valid.
  onPressSubmit: function() {
    var state = 'First name: ' + this.state.firstName + '\n' +
                'Last name: ' + this.state.lastName + '\n' +
                'Phone number: ' + this.state.phoneNumber;
    NativeModules.MyCustomModule.show(state);
    var completed = true;
    if (completed) {
        this.props.onSubmit();
    }
  },
  getInitialState() {
    return {
      firstName: '',
      phoneNumber: '',

    }
  },
  render() {
    console.log("here is the state" + this.state);
    return (
      <View>
        <TextInput
          placeholder='First Name'
          value={this.state.firstName}
          onChangeText={(text) => this.setState({
            firstName: text
          })}>
        </TextInput>
        <TextInput
          placeholder='Last Name'
          value={this.state.lastName}
          onChangeText={(text) => this.setState({
            lastName: text
          })}>
        </TextInput>
        <TextInput
          placeholder='Phone Number'
          value={this.state.phoneNumber}
          onChangeText={(text) => this.setState({
            phoneNumber: text
          })}
          keyboardType='numeric'>
        </TextInput>
        <TouchableHighlight
          onPress={this.onPressSubmit}>
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

module.exports = SurveyForm;
import './ReactDOM';
//import { AppRegistry } from 'react-native';

//import App from './src/App';
//AppRegistry.registerComponent('ReindexTodoMVC', () => App);

var React = require('react-native');
var PUBNUB = require('pubnub');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;


var PubNubChat = React.createClass({
  getInitialState: function() {
  	return {messages: []};
  },
  componentWillMount: function() {
	var pubnub = PUBNUB.init({
	    publish_key: 'pub-c-2efc0179-35d4-45fb-b0cc-c6d7999dfb8a',
	    subscribe_key: 'sub-c-ea0d3470-76ce-11e5-960b-02ee2ddab7fe'
	});
	pubnub.subscribe({
	    channel: 'my_channel',
	    message: function(m){
	    	console.log(m); // log message :)
	    },
	    error: function (error) {
	      console.log(JSON.stringify(error));
	    }
	});
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menus
        </Text>
        <Text style={styles.instructions}>
          Here are the messages. {this.state}
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
AppRegistry.registerComponent('ReindexTodoMVC', () => PubNubChat);
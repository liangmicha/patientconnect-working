var React = require('react-native');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');
//import MySceneComponent from './src/components/MySceneComponent';
import MainView from './src/components/MainView';
import WelcomeView from './src/components/WelcomeView';

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

import { AppRegistry } from 'react-native';


// Initializing Parse
Parse.initialize(
	"WTAN135mlF1cqo5eL7IRFpDKztxSRdPKLZWmrcOL",
	"YtzjUMxuYOAAVPERLWbuhc3fXVHQk6iHoiPb1XJR"
);

var App = React.createClass({
	mixins: [ParseReact.Mixin],
	observe: function(props, state) {
		return {
		  user: ParseReact.currentUser,
		};
	},
	render: function() {
		if (this.data.user) {
			return (
				<MainView user={this.data.user}>
				</MainView>
			);
		} else {
			return (
				<WelcomeView>
				</WelcomeView>
			);
		}
	}
});

React.AppRegistry.registerComponent('App', () => App);

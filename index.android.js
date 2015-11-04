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

var DeviceInfo = require('react-native-device-info');

console.log("Device Unique ID", DeviceInfo.getUniqueID());  // e.g. FCDBD8EF-62FC-4ECB-B2F5-92C9E79AC7F9

console.log("Device Manufacturer", DeviceInfo.getManufacturer());  // e.g. Apple

console.log("Device Model", DeviceInfo.getModel());  // e.g. iPhone

console.log("Device Name", DeviceInfo.getSystemName());  // e.g. iPhone OS

console.log("Device Version", DeviceInfo.getSystemVersion());  // e.g. 9.0

console.log("Bundle Id", DeviceInfo.getBundleId());  // e.g. com.learnium.mobile

console.log("Build Number", DeviceInfo.getBuildNumber());  // e.g. 89

console.log("App Version", DeviceInfo.getVersion());  // e.g. 1.1.0

console.log("App Version (Readable)", DeviceInfo.getReadableVersion());  // e.g. 1.1.0.89

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

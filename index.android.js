var React = require('react-native');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');
var { Text, View } = React;

import { AppRegistry } from 'react-native';
import LandingCard from './src/components/LandingCard'


// Initializing Parse
Parse.initialize(
	"WTAN135mlF1cqo5eL7IRFpDKztxSRdPKLZWmrcOL",
	"YtzjUMxuYOAAVPERLWbuhc3fXVHQk6iHoiPb1XJR"
);


var App = React.createClass({

	render() {
		var initialRoute = 'Welcome';
		return (
			<LandingCard initialRoute={initialRoute}>
			</LandingCard>
		);
	}
});

React.AppRegistry.registerComponent('App', () => App);

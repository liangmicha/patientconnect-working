var React = require('react-native');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');


import { AppRegistry } from 'react-native';
import LandingCard from './src/components/LandingCard'


// Initializing Parse
Parse.initialize(
	"WTAN135mlF1cqo5eL7IRFpDKztxSRdPKLZWmrcOL",
	"YtzjUMxuYOAAVPERLWbuhc3fXVHQk6iHoiPb1XJR"
);

var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  console.log("yay! it worked");
});


var { Text, View } = React;
var App = React.createClass({
	render: function() {
		return (
			<LandingCard name='Welcome'>
			</LandingCard>
		);
	}
});

AppRegistry.registerComponent('App', () => App);

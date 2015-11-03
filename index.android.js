var React = require('react-native');
import { AppRegistry } from 'react-native';
import LandingCard from './src/components/LandingCard'

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

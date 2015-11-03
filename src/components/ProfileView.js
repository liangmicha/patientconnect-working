'use strict';

var React = require('react-native');

var { Text, View} = React;

var ProfileView = React.createClass({
	render() {
		return (
			<View>
			    <Text>
				Profile view is here.
				</Text>
			</View>
		);
	}
});

module.exports = ProfileView;
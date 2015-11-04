'use strict';

var React = require('react-native');

var { Text, View} = React;

var ProfileView = React.createClass({
	render() {
		return (
			<View>
				<Text>
					username: {this.props.user.username}
					profile: {this.props.user.profile}
					phone: {this.props.user.phone}
				</Text>
			</View>
		);
	}
});

module.exports = ProfileView;
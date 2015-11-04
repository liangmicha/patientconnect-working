'use strict';

var React = require('react-native');
var Parse = require('parse/react-native');
import ProfileView from './ProfileView';

var { Text, View, NativeModules } = React;

var MainView = React.createClass({
	getInitialState() {
		return {
		    view: 'Profile'
		}
	},
	logOut() {
		Parse.User.logOut();
	},
	// TODO add logic to NOT set state if the same.
	switchToPrivateMessage() {
		this.setState({view: 'PrivateMessages'});
	},
	switchToGroups() {
		this.setState({view: 'Groups'});
	},
	switchToSettings() {
		this.setState({view: 'Settings'});
	},
	switchToProfile() {
		this.setState({view: 'Profile'});
	},
	render() {
		var section = ( <View> </View> );
		if (this.state.view == 'Profile') {
			section = (
				<ProfileView user={this.props.user}>
				</ProfileView>
			);
		} else if (this.state.view == 'PrivateMessages') {
			section = (
				<View>
					<Text>
						Filler for Private Messages for now.
					</Text>
				</View>
			);
		} else if (this.state.view == 'Settings') {
			section = (
				<View>
					<Text>
						Filler for Settings for now.
					</Text>
				</View>
			);	
		} else if (this.state.view == 'Groups') {
			section = (
				<View>
					<Text>
						Filler for Groups for now.
					</Text>
				</View>
			);	
		}
		return (
			<View>
				{section}
				<View>
				    <Text> Logged in as {this.props.user.username}
				    </Text>
					<Text onPress={this.switchToPrivateMessage}> Private Message 
					</Text>
					<Text onPress={this.switchToGroups}> Groups
					</Text>
					<Text onPress={this.switchToSettings}> Settings
					</Text>
					<Text onPress={this.switchToProfile}> Profile
					</Text>
					<Text onPress={this.logOut}> Logout
					</Text>
				</View>
			</View>
		);
	}
});

module.exports = MainView;
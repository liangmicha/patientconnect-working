'use strict';

var React = require('react-native');
var Parse = require('parse/react-native');
import ProfileView from './ProfileView';

var { Text, View, NativeModules } = React;

var MainView = React.createClass({
	logOut() {
		Parse.User.logOut()
        this.switchToWelcomeView();
	},
	switchToWelcomeView() {
		this.props.onGoto('Welcome');
	},
	switchToPrivateMessage() {
		if (!(this.props.whichTab == 'privateMessage')) {
			this.props.onGoto('MainView_privateMessage');
		}
	},
	switchToGroups() {
		if (!(this.props.whichTab == 'groups' || this.props.whichTab == 'default')) {
			this.props.onGoto('MainView_groups');
	    }
	},
	switchToSettings() {
		if (!(this.props.whichTab == 'settings')) {
		    this.props.onGoto('MainView_settings');
		}
	},
	switchToProfile() {
		if (!(this.props.whichTab == 'profile')) {
			this.props.onGoto('MainView_profile');
		}
	},
	render() {
		var message = this.props.whichTab;
		if (message == 'default') {
			message = 'profile';
		}
		return (
			<View>
				<ProfileView>
				</ProfileView>
				<View>
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
'use strict';

var React = require('react-native');
import Relay from 'react-relay';
import ProfileView from './Profile';

var { Text, View, NativeModules } = React;

var MainView = React.createClass({
	switchToPrivateMessage() {
		NativeModules.MyCustomModule.show(this.props.whichTab);
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
				<ProfileView viewer={this.props.viewer}>
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
				</View>
			</View>
		);
	}
});

export default Relay.createContainer(MainView, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on ReindexViewer {
		allTodos(first: 1) {
		  count
		}
        ${ProfileView.getFragment('viewer')}
      }
    `,
  },
});
'use strict';

var React = require('react-native');
import Relay from 'react-relay';

var { Text, View} = React;

var ProfileView = React.createClass({
	render() {
		return (
			<View>
			    <Text>
				Profile view is here.
				{this.props.viewer.allTodos.count}
				</Text>
			</View>
		);
	}
});

export default Relay.createContainer(ProfileView, {
  fragments: {
    viewer: () => Relay.QL`
	  fragment on ReindexViewer {
		allTodos(first: 1) {
		  count
		}
	  }
    `,
  },
});
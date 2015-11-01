'use strict';
var React = require('react-native');
var Relay = require('react-relay');
var Reindex = require('reindex-js');

import AppRoute from './AppRoute';
import TodoCount from './TodoCount';

var {
	NativeModules
} = React;

const reindex = new Reindex('https://neutral-holmium-449.myreindex.com');
Relay.injectNetworkLayer(reindex.getRelayNetworkLayer());

export default class App extends React.Component {
  render() {
    return (
      <Relay.RootContainer
        Component={TodoCount}
        route={new AppRoute} />
    );
  }
}

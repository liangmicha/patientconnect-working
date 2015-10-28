import React from 'react-native';
import Relay from 'react-relay';
import Reindex from 'reindex-js';

import AppRoute from './AppRoute';
import TodoCount from './TodoCount';

var {
	NativeModules
} = React;

const reindex = new Reindex('https://neutral-holmium-449.myreindex.com');
Relay.injectNetworkLayer(reindex.getRelayNetworkLayer());

//NativeModules.MyCustomModule.show("Sandeep is here !!!!");
NativeModules.PubNubModule.testShow("blah blah blah");
export default class App extends React.Component {
  render() {
    return (
      <Relay.RootContainer
        Component={TodoCount}
        route={new AppRoute} />
    );
  }
}
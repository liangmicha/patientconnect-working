import React from 'react-native';
var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');
import MySceneComponent from './MySceneComponent';

const {
  BackAndroid,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  Navigator,
  NativeModules,
} = React;

SCENES_STATE_MACHINE = {
  'Welcome': {
      'Previous': null,
      'Next': 'Survey',
  },
  'Welcome2': {
      'Previous': 'Welcome',
      'Next': 'Welcome3',
  },
  'Welcome3': {
      'Previous': 'Welcome2',
      'Next': 'Survey',
  },
  'Survey': {
      'Previous': 'Welcome3',
      'Next': 'MainView_default',
  }
}

WELCOME_TEXTS = {
  'Welcome': 'Welcome to PatientConnect',
  'Welcome2': 'We help you find people you want to talk to.',
  'Welcome3': 'To get your through this journey.'
}

var _navigator;
BackAndroid.addEventListener('hardwareBackPress', function() {
  console.log(_navigator.getCurrentRoutes());
  if (_navigator && _navigator.getCurrentRoutes().length > 1) {
    _navigator.pop();
    return true;
  }
  return false;
});

var LandingCard = React.createClass({
    mixins: [ParseReact.Mixin],
    _onRef: function (ref, indexInStack) {
        console.log(ref);
    },
    observe: function(props, state) {
      return {
        initialRoute: props.initialRoute
      };
    },
    render: function() {
        return (
            <Navigator
                initialRoute={{name: this.data.initialRoute, index: 0}}
                onItemRef={this._onRef}
                renderScene={(route, navigator, onRef) => {
                    _navigator = navigator;
                    return (
                      <MySceneComponent
                          ref={onRef}
                          name={route.name}
                          navigator={navigator}
                          onForward={() => {
                              var nextIndex = route.index + 1;
                              navigator.push({
                                  name: SCENES_STATE_MACHINE[route.name]['Next'],
                                  index: nextIndex,
                              });
                          }}
                          onBack={() => {
                              if (route.index > 0) {
                                  navigator.pop();
                              }
                          }}
                          onGoto={(routeName) => {
                            if (routeName == 'Logout') {
                              navigator.popToTop();
                              navigator.replace({
                                name: 'Welcome',
                                index: 0
                              })
                            } else {
                              var nextIndex = route.index + 1;
                              navigator.push({
                                  name: routeName,
                                  index: nextIndex,
                              });
                            }
                          }}
                          index={route.index}
                          viewer={this.props.viewer}
                          >
                      </MySceneComponent>
                  );
                }}
                configureScene={(route) => {
                    if (route.sceneConfig) {
                        return route.sceneConfig;
                    }
                    // TODO figure out the ideal SceneConfig.
                    return Navigator.SceneConfigs.FadeAndroid;
                }}>
            </Navigator>
        );
    }
});


module.exports = LandingCard;
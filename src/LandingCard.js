import React from 'react-native';
import Relay from 'react-relay';
import SurveyForm from './SurveyForm';
import MainView from './MainView';

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
      'Next': 'MainView',
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




/**
 * @class
 * @extends React.Component
 */
class MySceneComponent extends React.Component {
    render() {
        // If name begins with Welcome:
        if (this.props.name.indexOf('Welcome') == 0) {
          var message = WELCOME_TEXTS[this.props.name];
          return (
              <View style={styles.container}>
                  <View style={styles.navbar}>
                    <Text style={[styles.base, styles.back]} onPress={this.props.onBack}>Previous</Text>
                    <Text style={[styles.base, styles.forward]} onPress={this.props.onForward}>Next</Text>
                  </View>
                  <View>
                      <Text> {message} </Text>
                  </View>
              </View>
          );
        } else if (this.props.name.indexOf('Survey') == 0) {
          return (
              <SurveyForm onSubmit={this.props.onForward}>
              </SurveyForm>
          );
        } else if (this.props.name.indexOf('MainView') == 0) {
          return (
              <MainView>
              </MainView>
          );
        } else {
          return (
            <View style={styles.survey}>
              <Text>
                Sorry, I do not know what this page is about.
              </Text>
            </View>
          );
        }
    }
}


var LandingCard = React.createClass({
    _onRef: function (ref, indexInStack) {
        console.log(ref);
    },
    render: function() {
        return (
            <Navigator
                initialRoute={{name: 'Welcome', index: 0}}
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
                          index={route.index}
                          >
                      </MySceneComponent>
                  );
                }}
                configureScene={(route) => {
                    if (route.sceneConfig) {
                        return route.sceneConfig;
                    }
                    // TODO figure out the ideal SceneConfig.
                    return Navigator.SceneConfigs.FloatFromRight;
                }}>
            </Navigator>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        marginTop: 100,
        padding: 20
    },
    navbar: {
        flexDirection: 'row',
        marginBottom: 30,
    },
    base: {
        fontSize: 20,
        color: 'blue'
    },
    back: {
        flex: 1
    },
    forward: {}
});

export default Relay.createContainer(LandingCard, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on ReindexViewer {
        allTodos(first: 100) {
          count,
        }
      }
    `,
  },
});

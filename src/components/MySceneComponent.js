import React from 'react-native';
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

var MySceneComponent = React.createClass({
    render: function() {
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
          var lst = this.props.name.split('_');
          // TODO make sure list is 2. If not you are in big trouble :(
          var whichTab = lst[1];
          return (
              <MainView viewer={this.props.viewer} whichTab={whichTab} onGoto={this.props.onGoto} mainViewName={this.props.name}>
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


module.exports = MySceneComponent;
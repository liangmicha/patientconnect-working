import React from 'react-native';
import Relay from 'react-relay';

const {
  StyleSheet,
  Text,
  View,
} = React;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  count: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

class Todo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.count}>
        {this.props.viewer.text}
        todos in total.</Text>
      </View>
    );
  }
}

export default Relay.createContainer(Todo, {
  fragments: {
    todo: () => Relay.QL`
      fragment on Todo {
        id,
        text,
        complete
      }
    `
  }
});
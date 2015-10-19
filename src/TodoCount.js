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

class TodoCount extends React.Component {
  render() {
    const { count } = this.props.viewer.allTodos;
    return (
      <View style={styles.container}>
        <Text style={styles.count}>{count} todos in total.</Text>
      </View>
    );
  }
}

export default Relay.createContainer(TodoCount, {
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

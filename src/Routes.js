var Routes = function (route, navigationOperations, onComponentRef) {
  switch (route.path) {
    case 'home':
    case 'addItem':
    case 'itemList':
    case 'itemDetail':
      return (
        <DrawerLayoutView
          path={route.path}
          navigator={navigationOperations} />
      );
      break;
    case 'splash':
      return (
        <View style={styles.container}>
          <Text style={styles.instructions}>
            Routes for splash
          </Text>
        </View>
      );
    default:
  }

  return (
    <Text>Not found.</Text>
  )
};

module.exports = Routes;
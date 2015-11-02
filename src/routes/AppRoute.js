import Relay from 'react-relay';

class AppRoute extends Relay.Route {
  static queries = {
    viewer: () => Relay.QL`query { viewer }`,
  };
  static routeName = 'AppRoute';
}

export default AppRoute;

import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import Application from './Application.jsx';

export default class Root extends React.Component {

  static propTypes = {
    store: PropTypes.object.isRequired,
  };

  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={browserHistory}>
          <Route path="/" component={Application} />
        </Router>
      </Provider>
    )
  }
}

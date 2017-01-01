import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

import Application from './Application';
import HomePage from '../pages/HomePage';
import AccumulatorPage from '../pages/AccumulatorPage';
import ToDoPage from '../pages/ToDoPage';
import StaticPage from '../pages/StaticPage';
import NoMatchPage from '../pages/NoMatchPage';

export default class Root extends React.Component {

  static propTypes = {
    store: PropTypes.object.isRequired,
  };

  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={browserHistory}>

          <Route path="/" component={Application}>
            <IndexRoute component={HomePage}/>
            <Route path="home" component={HomePage}/>
            <Route path="accumulator" component={AccumulatorPage}/>
            <Route path="todos" component={ToDoPage}/>
            <Route path="static" component={StaticPage}>
              <Route path=":pageId" component={StaticPage}/>
            </Route>
            <Route path="*" component={NoMatchPage}/>
          </Route>

        </Router>
      </Provider>
    )
  }
}

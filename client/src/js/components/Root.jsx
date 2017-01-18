import React, { PropTypes } from 'react'
import { Provider } from 'react-intl-redux'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'

import Application from './Application'
import HomePage from '../pages/HomePage'
import AccumulatorPage from '../pages/AccumulatorPage'
import ToDoPage from '../pages/ToDoPage'
import SeriesPage from '../pages/SeriesPage'
import BriefingPage from '../pages/BriefingPage'
import BriefingSelectionPage from '../pages/BriefingSelectionPage'
import NoMatchPage from '../pages/NoMatchPage'

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
            <Route path="series" component={SeriesPage}/>
            <Route path="todos" component={ToDoPage}/>
            <Route path="briefing" component={BriefingSelectionPage}/>
            <Route path="briefing/:icaoCode" component={BriefingPage}/>
            <Route path="*" component={NoMatchPage}/>
          </Route>

        </Router>
      </Provider>
    )
  }
}

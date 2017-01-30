import React from 'react'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'

import '../../css/font-awesome.min.css'
import '../../css/bootstrap.min.css'

import '../../css/application.scss'

import NavigationBar from './NavigationBar'
import AlertBox from './AlertBox'
import Splash from './Splash'

import { fetchIntl } from '../actions/fetchIntlActions'

@connect(
  (state) => {
    return { messages: state.intl.messages }
  },
  (dispatch) => {
    return {
      fetchDefaultIntl: () => { dispatch(fetchIntl('en')) }
    }
  }
)
export default class Application extends React.Component {

  componentWillMount() {
    if(isEmpty(this.props.messages)) {
      // Make EN default language
      this.props.fetchDefaultIntl()
    }
  }

  render() {
    return (
      <div>
        <AlertBox />
        <Splash />
        <NavigationBar />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

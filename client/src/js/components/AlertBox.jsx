import React from 'react'
import { connect } from 'react-redux'
import { cloneDeep } from 'lodash'

import { Alert } from 'react-bootstrap'

import '../../css/alert.css'

import * as actions from '../actions/alertActions'

function mapStateToProps(state) {
  return cloneDeep(state.alert)
}

function mapDispatchToProps(dispatch) {
  return { actionCloseAlert: () => dispatch(actions.clear()) }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class AlertBox extends React.Component {
  render() {
    if(this.props.style) {
      return (
        <Alert className="alert-fixed-float-top" bsStyle={this.props.style} onDismiss={this.props.actionCloseAlert}>
          {this.props.message}
        </Alert>
      )
    }
    return null
  }
}

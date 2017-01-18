import React from 'react'
import { connect } from 'react-redux'
import FontAwesome from 'react-fontawesome'
import { Modal } from 'react-bootstrap'

@connect((state) => {
  return { splash: state.alert.splash }
})
export default class Splash extends React.Component {
  render() {
    return (
      <Modal enforceFocus={true} show={this.props.splash}>
        <Modal.Body>
          <FontAwesome name="spinner" /> Loading translations...
        </Modal.Body>
      </Modal>
    )
  }
}

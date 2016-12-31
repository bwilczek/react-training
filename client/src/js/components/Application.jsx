import React from 'react'
import { connect } from 'react-redux'

import { add } from '../actions/calculatorActions'

import '../../scss/application.scss'

function mapStateToProps(state) {
  return { calculator: state.calculator }
}

function mapDispatchToProps(dispatch) {
  return { add2to3: () => dispatch(add(2,3)) };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Application extends React.Component {
  render() {
    return (
      <div>
        Hello World. <span>{this.props.calculator.result}</span>
        <br />
        <span onClick={this.props.add2to3}>take five!</span>
      </div>
    );
  }
}

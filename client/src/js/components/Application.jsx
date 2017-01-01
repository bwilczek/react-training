import React from 'react'
import { connect } from 'react-redux'

import { add } from '../actions/calculatorActions'

import '../../scss/application.scss'

function mapStateToProps(state) {
  return { calculator: state.calculator }
}

function mapDispatchToProps(dispatch) {
  return { add: (operand1, operand2) => dispatch(add(operand1, operand2)) };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Application extends React.Component {

  accumulate() {
    this.props.add(this.props.calculator.accumulator,1)
  }

  render() {
    return (
      <div>
        Hello World. <span>{this.props.calculator.accumulator}</span>
        <br />
        <span onClick={this.accumulate.bind(this)}>take five!</span>
      </div>
    );
  }
}

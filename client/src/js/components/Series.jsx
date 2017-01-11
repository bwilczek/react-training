import React from 'react'
import { connect } from 'react-redux'
import { range } from 'lodash'

import * as actions from '../actions/seriesActions'
import * as seriesSelector from '../selectors/seriesSelector'

const makeMapStateToProps = () => {
  const getStats = seriesSelector.makeGetStats()
  const mapStateToProps = (state, props) => {
    return getStats(state, props)
  }
  return mapStateToProps
}

function mapDispatchToProps(dispatch) {
  return {
    actionAppend: (id, value) => dispatch(actions.append(id, value)),
    actionClear: (id) => dispatch(actions.clear(id))
  }
}

@connect(makeMapStateToProps, mapDispatchToProps)
export default class Series extends React.Component {

  digitClicked(e) {
    this.props.actionAppend(this.props.seriesId, e.target.getAttribute('value'))
  }

  clearClicked(e) {
    this.props.actionClear(this.props.seriesId)
  }

  buttonDigit(digit) {
    return <button
      name="digit"
      key={digit}
      value={digit}
      onClick={this.digitClicked.bind(this)}
    >{digit}</button>
  }

  buttonClear() {
    return <button onClick={this.clearClicked.bind(this)}>CLR</button>
  }

  render() {

    return (
      <div>
        <div>
          The title is: "{this.props.title}" and ID is {this.props.seriesId}
        </div>
        <div>
          <span>
            {this.buttonClear()}
          </span>
          <span>
            {range(1,10).map((digit) => this.buttonDigit(digit))}
          </span>
          <span>
            Cnt: {this.props.cnt} &nbsp;
            Sum: {this.props.sum} &nbsp;
            Avg: {this.props.avg} &nbsp;
          </span>
        </div>
      </div>
    );
  }
}

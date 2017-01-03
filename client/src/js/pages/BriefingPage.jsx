import React from 'react'
import { connect } from 'react-redux'

import * as brief from '../actions/briefingActions'

function mapStateToProps(state) {
  return { briefing: state.briefing }
}

function mapDispatchToProps(dispatch) {
  return { briefAll: (icaoCode) => dispatch(brief.all(icaoCode)) };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class BriefingPage extends React.Component {

  componentDidMount() {
    this.props.briefAll( this.props.params.icaoCode )
  }

  render() {
    return (
      <div>
        Briefing Page for {this.props.params.icaoCode}
        <h4>METAR</h4>
        <p>
        {this.props.briefing[this.props.params.icaoCode].metar.data}
        </p>
      </div>
    );
  }
}

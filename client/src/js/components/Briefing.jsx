import React from 'react'
import { connect } from 'react-redux'

import * as brief from '../actions/briefingActions'
import * as briefingSelector from '../selectors/briefingSelector'

const makeMapStateToProps = () => {
  const getBriefingForIcaoCode = briefingSelector.makeGetBriefingForIcaoCode()
  const mapStateToProps = (state, props) => {
    return {
      briefing: getBriefingForIcaoCode(state, props)
    }
  }
  return mapStateToProps
}

function mapDispatchToProps(dispatch) {
  return { briefAll: (icaoCode) => dispatch(brief.all(icaoCode)) }
}

@connect(makeMapStateToProps, mapDispatchToProps)
export default class Briefing extends React.Component {

  componentDidMount() {
    this.props.briefAll( this.props.icaoCode )
  }

  render() {
    let metar = ''
    if(this.props.briefing) {
      metar = this.props.briefing.metar.data
    }
    return (
      <div>
        Briefing Page for {this.props.icaoCode}
        <h4>METAR</h4>
        <p>
        {metar}
        </p>
      </div>
    );
  }
}

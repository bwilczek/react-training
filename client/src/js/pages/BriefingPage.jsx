import React from 'react'
import Briefing from '../components/Briefing'

export default class BriefingPage extends React.Component {

  render() {
    return (
      <div>
        <Briefing icaoCode={this.props.params.icaoCode} />
        <hr />
        <Briefing icaoCode="EPWA" />
      </div>
    );
  }
}

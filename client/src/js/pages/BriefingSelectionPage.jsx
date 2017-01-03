import React from 'react'
import { Link } from 'react-router';

export default class BriefingSelectionPage extends React.Component {

  render() {
    return (
      <div>
        BriefingSelection Page<br />
        <Link to="/briefing/EPWR">EPWR</Link>
      </div>
    );
  }
}

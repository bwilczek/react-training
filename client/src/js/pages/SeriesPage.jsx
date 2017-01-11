import React from 'react'
import { Link } from 'react-router'

import Series from '../components/Series'

export default class SeriesPage extends React.Component {

  render() {
    return (
      <div>
        <Series seriesId="1" title="Data for Michał" />
        <br />
        <Series seriesId="2" title="Data for Kasia" />
      </div>
    );
  }
}

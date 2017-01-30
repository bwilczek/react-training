import React from 'react'
import FontAwesome from 'react-fontawesome'
import { FormattedMessage } from 'react-intl'

import iconAirport from '../../img/airport.png'
import logoImage from '../../img/appIcon.png'

export default class ToDoPage extends React.Component {

  render() {
    return (
      <div>
        <FontAwesome size="2x" className="fa-spin" name="spinner" />
        ToDo Page with FontAwesome rocket:
        <FontAwesome name="rocket" />
        <FormattedMessage id="hello" />
        <br />
        <img src={iconAirport} />
        <img src={logoImage} />
      </div>
    );
  }
}

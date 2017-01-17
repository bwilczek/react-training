import React from 'react'
import FontAwesome from 'react-fontawesome'
import { FormattedMessage } from 'react-intl'

export default class ToDoPage extends React.Component {

  render() {
    return (
      <div>
        ToDo Page with FontAwesome rocket:
        <FontAwesome name="rocket" />
        <FormattedMessage id="hello" />
      </div>
    );
  }
}

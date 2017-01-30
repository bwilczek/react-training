import React from 'react'
import { DropdownButton, MenuItem } from 'react-bootstrap'
import { connect } from 'react-redux'
import { without } from 'lodash'

import { fetchIntl } from '../actions/fetchIntlActions'

@connect(
  (state) => {
    return {
      locale: state.intl.locale,
    }
  },
  (dispatch) => {
    return {
      fetchIntl: (e) => {
        dispatch(fetchIntl(e.target.dataset.locale))
      }
    }
  }
)
export default class LocaleSelector extends React.Component {

  render() {
    const locales = ['en', 'pl', 'es']

    return (
      <DropdownButton bsSize="xsmall" title={this.props.locale} id="bg-nested-dropdown">
        { without(locales, this.props.locale).map((l) => <MenuItem key={l} onClick={this.props.fetchIntl.bind(this)} data-locale={l}>{l}</MenuItem>) }
      </DropdownButton>
    );
  }
}

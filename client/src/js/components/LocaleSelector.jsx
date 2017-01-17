import React from 'react'
import { DropdownButton, MenuItem } from 'react-bootstrap'
import { connect } from 'react-redux'
import { updateIntl } from 'react-intl-redux'

import { fetchIntl } from '../actions/fetchIntlActions'

@connect(
  (state) => {
    return {
      locale: state.intl.locale,
      newLocale: state.intlFetcher.locale,
      newMessages: state.intlFetcher.messages
    }
  },
  (dispatch) => {
    return {
      fetchIntl: (e) => {
        dispatch(fetchIntl(e.target.dataset.locale))
      },
      updateIntl: (locale, messages) => {
        dispatch(updateIntl({locale, messages}))
      }
    }
  }
)
export default class LocaleSelector extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (this.props.newLocale !== nextProps.newLocale) {
      this.props.updateIntl(nextProps.newLocale, nextProps.newMessages)
    }
  }

  render() {
    return (
      <DropdownButton bsSize="xsmall" title={this.props.locale} id="bg-nested-dropdown">
        <MenuItem onClick={this.props.fetchIntl.bind(this)} data-locale="es">es</MenuItem>
        <MenuItem onClick={this.props.fetchIntl.bind(this)} data-locale="en">en</MenuItem>
        <MenuItem onClick={this.props.fetchIntl.bind(this)} data-locale="pl">pl</MenuItem>
      </DropdownButton>
    );
  }
}

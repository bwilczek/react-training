import React from 'react'
import { DropdownButton, MenuItem } from 'react-bootstrap'
import { connect } from 'react-redux'
import { updateIntl } from 'react-intl-redux'

import { fetchIntl } from '../actions/fetchIntlActions'
import { splashOff } from '../actions/alertActions'

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
      },
      hideSplash: () => {
        dispatch(splashOff())
      }
    }
  }
)
export default class LocaleSelector extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (this.props.newLocale !== nextProps.newLocale) {
      this.props.updateIntl(nextProps.newLocale, nextProps.newMessages)
      this.props.hideSplash()
    }
  }

  render() {
    const locales = ['en', 'pl', 'es']

    return (
      <DropdownButton bsSize="xsmall" title={this.props.locale} id="bg-nested-dropdown">
        { locales.map((l) => <MenuItem key={l} onClick={this.props.fetchIntl.bind(this)} data-locale={l}>{l}</MenuItem>)}
      </DropdownButton>
    );
  }
}

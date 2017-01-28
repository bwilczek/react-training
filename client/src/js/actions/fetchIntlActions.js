import axios from 'axios'
import { updateIntl } from 'react-intl-redux'
import { splashOff } from '../actions/alertActions'

export function fetchIntl(locale) {
  return (dispatch) => {
    axios.post('/api/intl', {locale}).then(
      (response) => {
        dispatch(updateIntl(response.data))
        dispatch(splashOff())
      },
      (error) => {
        dispatch({type: 'XHR_REQUEST_FAILED'})
      }
    )
  }
}

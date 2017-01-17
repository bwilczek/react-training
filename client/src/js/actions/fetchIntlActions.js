import axios from 'axios'

export function fetchIntl(locale) {
  return {
    type: 'FETCH_INTL',
    payload: axios.post('/api/intl', {locale}),
  }
}

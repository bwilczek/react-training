import axios from 'axios'

export function all(icaoCode) {
  return {
    type: 'BRIEFING_ALL',
    payload: axios.post('/api/briefing/all', {icao_code: icaoCode}),
  }
}

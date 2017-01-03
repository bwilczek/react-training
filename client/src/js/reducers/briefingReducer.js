import { cloneDeep } from 'lodash'

const initialState = {
  'EPWR': { icao_code: 'EPWR', metar: { data: 'sample metar' } }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // case 'BRIEFING_ALL_PENDING': {
    //   return {...state, result: '...'}
    // }
    // case 'BRIEFING_ALL_REJECTED': {
    //   return {...state, result: 'ERR'}
    // }
    case 'BRIEFING_ALL_FULFILLED': {
      let newState = cloneDeep(state)
      newState[action.payload.data.icao_code] = action.payload.data
      return newState
    }
  }
  return state
}

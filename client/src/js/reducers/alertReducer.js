import { cloneDeep } from 'lodash'

const initialState = {
  style: null,
  message: null
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ALERT_CLEAR': {
      return {...state, style: null, message: null}
    }
    case 'BRIEFING_ALL_REJECTED': {
      return {...state, style: 'danger', message: 'Could not fetch data'}
    }
  }
  return state
}

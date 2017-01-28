const initialState = {
  style: null,
  message: null,
  splash: true
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ALERT_CLEAR': {
      return {...state, style: null, message: null}
    }
    case 'BRIEFING_ALL_REJECTED': {
      return {...state, style: 'danger', message: 'Could not fetch data'}
    }
    case 'XHR_REQUEST_FAILED': {
      return {...state, style: 'danger', message: 'Could not fetch data'}
    }
    case 'SPLASH_ON': {
      return {...state, splash: true}
    }
    case 'SPLASH_OFF': {
      return {...state, splash: false}
    }
  }
  return state
}

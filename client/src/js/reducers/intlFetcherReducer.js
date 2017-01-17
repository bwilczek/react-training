const initialState = {
  messages: null,
  locale: null
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // case 'FETCH_INTL_PENDING': {
    //   return {...state, result: '...'}
    // }
    // case 'FETCH_INTL_REJECTED': {
    //   return {...state, result: 'ERR'}
    // }
    case 'FETCH_INTL_FULFILLED': {
      return {...state, messages: action.payload.data.messages, locale: action.payload.data.locale}
    }
  }
  return state
}

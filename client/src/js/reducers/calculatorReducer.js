const initialState = {
  accumulator: 0,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // case 'CALCULATOR_ADD_PENDING': {
    //   return {...state, result: '...'}
    // }
    // case 'CALCULATOR_ADD_REJECTED': {
    //   return {...state, result: 'ERR'}
    // }
    case 'CALCULATOR_ADD_FULFILLED': {
      return {...state, accumulator: action.payload.data.result}
    }
  }
  return state
}

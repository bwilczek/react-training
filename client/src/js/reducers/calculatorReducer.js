const initialState = {
  result: 0,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CALCULATOR_ADD': {
      return {...state, result: action.payload.operand1+action.payload.operand2}
    }
  }
  return state
}

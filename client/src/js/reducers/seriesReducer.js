import { cloneDeep, concat } from 'lodash'

const initialState = {}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SERIES_APPEND': {
      let newState = cloneDeep(state)
      if (!newState[action.payload.id]) {
        newState[action.payload.id] = []
      }
      newState[action.payload.id] = concat(newState[action.payload.id], [parseInt(action.payload.value)])
      return newState
    }
    case 'SERIES_CLEAR': {
      let newState = cloneDeep(state)
      newState[action.payload.id] = []
      return newState
    }
  }
  return state
}

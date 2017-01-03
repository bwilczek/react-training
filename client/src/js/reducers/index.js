import { combineReducers } from 'redux'

import calculator from './calculatorReducer'
import briefing from './briefingReducer'

export default combineReducers({
  calculator,
  briefing
})

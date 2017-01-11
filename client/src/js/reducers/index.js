import { combineReducers } from 'redux'

import calculator from './calculatorReducer'
import briefing from './briefingReducer'
import series from './seriesReducer'

export default combineReducers({
  calculator,
  briefing,
  series
})

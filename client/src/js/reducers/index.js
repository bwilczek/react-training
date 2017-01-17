import { combineReducers } from 'redux'

import { intlReducer } from 'react-intl-redux'

import calculator from './calculatorReducer'
import briefing from './briefingReducer'
import series from './seriesReducer'
import alert from './alertReducer'
import intlFetcher from './intlFetcherReducer'

export default combineReducers({
  calculator,
  briefing,
  series,
  alert,
  intlFetcher,
  intl: intlReducer
})

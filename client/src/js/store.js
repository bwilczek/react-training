import { applyMiddleware, createStore } from 'redux'

// import logger from 'redux-logger'
import promise from 'redux-promise-middleware'
import thunk from 'redux-thunk'

import combinedReducer from './reducers'

// LOCALE HANDLING

import { addLocaleData } from 'react-intl'
import esLocaleData from 'react-intl/locale-data/es'
import plLocaleData from 'react-intl/locale-data/pl'

addLocaleData([
  ...esLocaleData,
  ...plLocaleData,
])

import defaultTranslations from '../intl/es'

const defaultState = {
  intl: {
    locale: 'es',
    messages: defaultTranslations
  }
}

// END OF LOCALE HANDLING

// const middleware = applyMiddleware(promise(), thunk, logger())
const middleware = applyMiddleware(promise(), thunk)

export default createStore(combinedReducer, defaultState, middleware)

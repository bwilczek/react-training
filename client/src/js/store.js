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
// END OF LOCALE HANDLING

// const middleware = applyMiddleware(promise(), thunk, logger())
const middleware = applyMiddleware(promise(), thunk)

const persistedState = localStorage.getItem('reduxState1') ? JSON.parse(localStorage.getItem('reduxState1')) : undefined

const store = createStore(combinedReducer, persistedState, middleware)
store.subscribe(() => {
  localStorage.setItem('reduxState1', JSON.stringify(store.getState()))
})

export default store

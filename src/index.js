import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import promise from 'redux-promise-middleware'
import createHistory from 'history/createBrowserHistory'

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import reducers from './reducers'
import App from './App'

//  using a browser history in this case
const history = createHistory()
const store = createStore(
  combineReducers({
    reducers,
    // router reducer in redux store on the `router` key
    router: routerReducer
  }),
  composeWithDevTools(applyMiddleware(
    // middleware for async actions
    promise(),
    // middleware for tracking navigation in redux store
    routerMiddleware(history))
  )
)
// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

ReactDOM.render(
// The Provider component provides
//  the React store to all its child
//  components so we don't need to pass
//  it explicitly to all the components.
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

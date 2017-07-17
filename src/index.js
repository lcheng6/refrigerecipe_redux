import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import promise from 'redux-promise-middleware'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import SignIn from './views/pages/sign-in'
import GetRecipes from './views/pages/get-recipes'


import { createStore, combineReducers, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import reducers from './reducers' // Or wherever you keep your reducers

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(promise, middleware)
)

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

ReactDOM.render(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={SignIn}/>
        <Route path="/sign-in" component={SignIn}/>
        <Route path="/get-recipes" component={GetRecipes}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

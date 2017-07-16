import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// import { AppContainer } from 'react-hot-loader'
import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga';

import reducers from './core/reducers';
import sagas from './core/sagas';
import App from './App'

import WebFont from 'webfontloader';
import 'normalize.css';
import './index.css'

WebFont.load({
  google: {
    families: ['Material Icons', 'Josefin Slab', 'Niconne', 'Raleway']
  }
});


const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const history = createBrowserHistory()
const store = createStore(
  connectRouter(history)(reducers),
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware
    ),
  ),
)
sagaMiddleware.run(sagas);


const render = () => {
  ReactDOM.render(
    // <AppContainer>
      <Provider store={store}>
        <App history={history} />
      </Provider>,
    // </AppContainer>,
    document.getElementById('root')
  )
}

render()

// if (module.hot) {
//   // Reload components
//   module.hot.accept('./App', () => {
//     render()
//   })
//
//   // Reload reducers
//   module.hot.accept('core/reducers', () => {
//     store.replaceReducer(connectRouter(history)(reducers))
//   })
// }

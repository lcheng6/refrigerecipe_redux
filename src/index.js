import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import rootReducer from './reducers'
import { configureStore } from './core/store'

import WebFont from 'webfontloader';
import 'normalize.css';
import './index.css'

WebFont.load({
  google: {
    families: ['Material Icons', 'Josefin Slab', 'Niconne', 'Raleway']
  }
});



const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = configureStore()

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render()

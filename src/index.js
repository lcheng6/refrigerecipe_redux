import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import { createStore, applyMiddleware } from 'redux'
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css';
import App from './App';

import WebFont from 'webfontloader';
import './index.css'

WebFont.load({
  google: {
    families: ['Material Icons', 'Josefin Slab', 'Niconne', 'Raleway']
  }
});

// const createStoreWithMiddleare = applyMiddleware()(createStore)



ReactDOM.render((
  // <Provider store={createStoreWithMiddleare(reducers)}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </Provider>
), document.getElementById('root'))
registerServiceWorker();

import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import { createStore, applyMiddleware } from 'redux'
import registerServiceWorker from './registerServiceWorker';

import App from './App';

// const createStoreWithMiddleare = applyMiddleware()(createStore)



ReactDOM.render((
  // <Provider store={createStoreWithMiddleare(reducers)}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </Provider>
), document.getElementById('root'))
registerServiceWorker();


import 'bootstrap/dist/css/bootstrap.css';
import './semantic/dist/semantic.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import { initAuth } from './core/auth';
import history from './history';
import configureStore from './store';
import App from './views/app';
import registerServiceWorker from './registerServiceWorker';
// import { composeWithDevTools } from 'redux-devtools-extension';


const store = configureStore();
const rootElement = document.getElementById('root');


function render(Component) {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Component/>
        </div>
      </ConnectedRouter>
    </Provider>,
    rootElement
  );
}


if (module.hot) {
  module.hot.accept('./views/app', () => {
    render(require('./views/app').default);
  });
}


registerServiceWorker();


initAuth(store.dispatch)
  .then(() => render(App))
  .catch(error => console.error(error));

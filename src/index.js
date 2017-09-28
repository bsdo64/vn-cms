import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import reducers from './reducers/index.js' // Or wherever you keep your reducers
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas/index.js'
import App from './components/App/index.js';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    combineReducers({
      ...reducers,
      router: routerReducer
    }),
    composeEnhancers(applyMiddleware(sagaMiddleware, middleware))
);


// then run the saga
sagaMiddleware.run(mySaga);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        { /* ConnectedRouter will use the store from Provider automatically */ }
        <ConnectedRouter history={history}>

            <Component/>

        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App/index.js', () => {
    const App = require('./components/App/index.js').default;
    render(App)
  });
}
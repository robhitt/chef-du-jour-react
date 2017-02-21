import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import promiseMiddleware from 'redux-promise'
import routes from './routes'
import rootReducer from './reducers/root-reducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import { showUser } from './actions'
// import App from './components/App';
import './index.css';

// const store = createStore(rootReducer, applyMiddleware(promiseMiddleware))
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(promiseMiddleware)));

if (!!sessionStorage.getItem('jwt')) {
  store.dispatch(showUser(1))
}

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(promiseMiddleware),
//   // other store enhancers if any
// ));

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ browserHistory } routes={ routes } />
  </Provider>,
  document.getElementById('root')
);

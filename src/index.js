import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import promiseMiddleware from 'redux-promise'
import routes from './routes'
import rootReducer from './reducers/root-reducer'
// import App from './components/App';
import './index.css';

const store = createStore(rootReducer, applyMiddleware(promiseMiddleware))

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ browserHistory } routes={ routes } />
  </Provider>,
  document.getElementById('root')
);

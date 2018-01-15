import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';
//import { createLogger} from 'redux-logger';
import { createStore, combineReducers } from 'redux';
import DevTools from './DevTools';
import reducer from './reducer.js';
import { addComment } from './actions.js';

//const logger = createLogger();
//const store = createStore(
//    reducer,
//    applyMiddleware(logger)
//);

const store = createStore(
    reducer,
    DevTools.instrument()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();

store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));

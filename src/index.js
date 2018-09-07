import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const defaultState = {
    feeling: '',
    understanding: '',
    support: '',
    comments: '',
    flagged: '',
    date: '',
}

const global = ( state = defaultState, action) =>{
    return state;
}



const storeInstance = createStore(
    combineReducers({global}),
    applyMiddleware(logger),
);




ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

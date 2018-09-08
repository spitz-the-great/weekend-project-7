import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const defaultObject = {
    feeling: '',
    understanding: '',
    support: '',
    comments: '',
    flagged: '',
    date: '',
}

const feedbackList = (state = defaultObject, action) => {

    if (action.type === 'ADD_FEELING') {
        console.log("payload:",  action.payload);
        const newInfo = action.payload;
        console.log(state);
        return {...state, feeling: newInfo}

    } else if (action.type === 'ADD_UNDERSTANDING') {
        console.log("payload:",  action.payload);
        const newInfo = action.payload;
        console.log(state);
        return {...state, understanding: newInfo}
    }
    else if (action.type === 'ADD_SUPPORT') {
        console.log("payload:",  action.payload);
        const newInfo = action.payload;
        console.log(state);
        return {...state, support: newInfo}
    }
    else if (action.type === 'ADD_COMMENTS') {
        console.log("payload:",  action.payload);
        const newInfo = action.payload;
        console.log(state);
        return {...state, comments: newInfo}

        // } else if (action.type === 'DUMP_IT') {
        //     return defaultObject;
    }
    console.log(state);
    return state;
}

const storeInstance = createStore(
    combineReducers({feedbackList}),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

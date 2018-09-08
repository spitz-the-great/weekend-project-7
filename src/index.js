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

const global = ( state = defaultObject, action) =>{

        if (action.type === 'ADD_FEELING') {

            const newInfo = action.payload;
            return {...state, defaultObject: newInfo.defaultObject, feeling: newInfo}

        } else if (action.type === 'ADD_UNDERSTANDING') {

            const newInfo = action.payload;
            return {...state, defaultObject: newInfo.defaultObject, understanding: newInfo}
    
        // } else if (action.type === 'DUMP_IT') {
        //     return defaultObject;
        }
        console.log(state);
        return state;
        
    
}



const storeInstance = createStore(
    combineReducers({global}),
    applyMiddleware(logger),
);




ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';


const feedback = [{
    feelings: '',
    understanding: '',
    supported: '',
    comments: '',
}]

const feedbackReducer = (state =[], action) => {

}

const reduxStore = createStore(
    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(logger)
)



ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

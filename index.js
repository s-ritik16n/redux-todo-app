import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import {todoApp} from './reducers';

let store = createStore(todoApp);

let rootElement = document.getElementById('root');

React.render(
    <Provider store={store}>
        {() => <App/>}
    </Provider>,
    rootElement
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './components/reduxApp/reduxAppComponents/redux/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
        <App />
    </React.StrictMode >
  </Provider>
);

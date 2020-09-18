import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import allReducers from './reducers/index'
import { Provider } from 'react-redux'

const initialState = {
  booksReducer : [
    {
    id: Math.floor(Math.random() * 100),
    title: 'Weep Not Child',
    category: 'Learning',
  },
  {
    id: Math.floor(Math.random() * 100),
    title: 'First man in the moon',
    category: 'Sci-Fi',
  },
  {
    id: Math.floor(Math.random() * 100),
    title: 'Upon this mountain',
    category: 'History',
  },
  {
    id: Math.floor(Math.random() * 100),
    title: 'Black Magic',
    category: 'Sci-fi',
  },
],  
  filter: 'All',
}

const store = createStore(
  allReducers, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

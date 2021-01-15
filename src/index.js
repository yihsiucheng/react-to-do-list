import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer as HotReloader } from 'react-hot-loader';
import App from './app.js';
import store from './store';
import './styles/styles.scss';


const mountNode = document.getElementById("root");

ReactDOM.render(
  <HotReloader>
    <Provider store={store}>
      <App />
    </Provider>
  </HotReloader>,
  mountNode
);

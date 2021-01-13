import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import './styles/styles.scss';

const mountNode = document.getElementById("root");

ReactDOM.render(
  <App />,
  mountNode
);

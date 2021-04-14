import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer as HotReloader } from 'react-hot-loader';
import { Router, Route, Switch } from 'react-router-dom';
import App from './components/App';
import store from './store';
import history from './history';
import './styles/index.scss';


const mountNode = document.querySelector('.app');

ReactDOM.render(
  <HotReloader>
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App} />
      </Router>
    </Provider>
  </HotReloader>,
  mountNode
);

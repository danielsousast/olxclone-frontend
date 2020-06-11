import React from 'react';
import './config/ReactotronConfig';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import store from './store';
import Routes from './routes/index';
import history from './services/history';
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;

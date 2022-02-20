import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import { UserContextContent } from './context/UserContext';

import './css/reset.css';
import './css/normalize.css';
import './css/bootstrap.min.css';
import './css/index.css';
import './css/style.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextContent>
        <App />
      </UserContextContent>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import { UserContextContent } from './context/UserContext';
import { ItemContextContent } from './context/ItemContext';
import { OrderContextContent } from './context/OrderContext';

import App from './App';

import './css/reset.css';
import './css/normalize.css';
import './css/bootstrap.min.css';
import './css/index.css';
import './css/style.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <OrderContextContent>
        <UserContextContent>
          <ItemContextContent>
            <App />
          </ItemContextContent>
        </UserContextContent>
      </OrderContextContent>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

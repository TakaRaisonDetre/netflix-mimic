import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'normalize.css';
import {GlobalStyle} from './global-style'

ReactDOM.render(
  <>
    <GlobalStyle/>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>,
  document.getElementById('root')
);

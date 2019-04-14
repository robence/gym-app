import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import './index.css';

ReactDOM.render(
  <div
    style={{
      backgroundColor: 'lightgrey',
      minHeight: '100vh',
    }}
  >
    <Dashboard />
  </div>,
  document.getElementById('root'),
);

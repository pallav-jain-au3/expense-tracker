import './firebase.js'
import React from 'react';
import ReactDOM from 'react-dom';
import Application from "./Application";
import './services/axios-interceptor.js'

ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  document.getElementById('root')
);


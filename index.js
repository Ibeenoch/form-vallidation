import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ecommerce from './Ecommerce/Ecommerce';
import Useeffect from './Git_and_Github_tutorial/Useeffect';
import ValidateForm from './Git_and_Github_tutorial/ValidateForm';





ReactDOM.render(
  <React.StrictMode>
    <ValidateForm/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

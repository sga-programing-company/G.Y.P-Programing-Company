import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/pages/Navbar'
import './components/style/index.css'
import PagePrincipal from './components/pages/PagePrincipal';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <PagePrincipal />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

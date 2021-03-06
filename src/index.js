import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

import Navbar from './components/pages/Navbar'
import PagePrincipal from './components/pages/PagePrincipal';
import Footer from './components/pages/Footer';
import './components/style/index.css'
import './components/style/MediaQuery.css'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/'>
          <PagePrincipal />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

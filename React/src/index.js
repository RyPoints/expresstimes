import './styles.css'
import { render } from 'react-dom'
import React, { Component, Fragment } from 'react'
import { BrowserRouter, Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import App from './App';

render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
  , document.getElementById('root')
);

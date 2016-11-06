import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Home from './components/Home.js';
import Create from './components/Create-Event.js';

render((<Router history={hashHistory}>
    <Route path="/" component={Home}/>
    <Route path="/create" component={Create}/>
</Router>), document.getElementById('app'));
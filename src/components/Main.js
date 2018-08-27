import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'
const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
        </Switch>
    </main>
);

export default Main;
'use strict'

var React = require('react');
var ReactDOM = require('react-dom');
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Styles from '../public/css/style.css';
import { Router, Route, hashHistory } from 'react-router'
var PageMaster = require('./components/page-master.js');
var Dashboard = require('./components/dashboard.js');
var Kanban = require('./components/kanban.js');
var TaskContainer = require('./components/taskcontainer.js');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route component={PageMaster}>
            <Route path="/" component={Dashboard} />
            <Route path="/taskList" component={TaskContainer}/>
            <Route path="/kanban" component={Kanban}/>
        </Route>
    </Router>,
    document.getElementById('root')
);
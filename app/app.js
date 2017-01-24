'use strict'

var React = require('react');
var ReactDOM = require('react-dom');
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Styles from '../public/css/style.css';
var PageMaster = require('./components/page-master.js');
var PageHeader = require('./components/page-header.js');
var PageBanner = require('./components/page-banner.js');
var PageBody = require('./components/page-body.js');
var PageFooter = require('./components/page-footer.js');

ReactDOM.render(
    <PageMaster>
        <PageHeader text="ReactJS: Kanban App" />
        <PageBanner />
        <PageBody text="Welcome to your task board" />
        <PageFooter footerText="Magenic Masters: ReactJS - Jed R. Cayetano" copyrightText=" 2017 Magenic Manila" />
    </PageMaster>,
    document.getElementById('root')
);
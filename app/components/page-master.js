'use strict'

var React = require('react');
var PageHeader = require('./page-header.js');
var PageBanner = require('./page-banner.js');
var PageBody = require('./page-body.js');
var PageFooter = require('./page-footer.js');

var PageMaster = React.createClass({
    render: function(){
        return (
            <div>
                <PageHeader text="ReactJS: Kanban App" />
                    {this.props.children}
                <PageFooter footerText="Magenic Masters: ReactJS - Jed R. Cayetano" copyrightText=" 2017 Magenic Manila" />
            </div>
            )
    }
});

module.exports = PageMaster;
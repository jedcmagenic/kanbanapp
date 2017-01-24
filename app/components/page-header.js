'use strict'

var React = require('react');

var PageHeader = React.createClass({
    render: function(){
        return (
            <div>
                <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <a className="navbar-brand" href="#">{this.props.text}</a>
                    </div>
                </div>
                </nav>
            </div>
            )
    }
});

module.exports = PageHeader;
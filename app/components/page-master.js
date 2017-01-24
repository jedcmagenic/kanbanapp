'use strict'

var React = require('react');

var PageMaster = React.createClass({
    render: function(){
        return (
            <div>{this.props.children}</div>
            )
    }
});

module.exports = PageMaster;
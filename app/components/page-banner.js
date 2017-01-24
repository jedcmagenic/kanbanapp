'use strict'

var React = require('react');
var ReactDOM = require('react-dom');

var PageFooter = React.createClass({
    render: function(){
        return (
            <div className="text-center">
                <img src="../images/banner.jpg" alt="magenic_banner" className="bannerImage"/> 
            </div>
            )
    }
});

module.exports = PageFooter;
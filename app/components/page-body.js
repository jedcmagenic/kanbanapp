'use strict'

var React = require('react');
var Section = require('./section.js');

var PageBody = React.createClass({
    render: function(){
        return (
            <div className="container">
                <h3>
                    {this.props.text}
                </h3>
                <div>
                    <Section title="Board" />
                </div>
            </div>
            )
    }
});

module.exports = PageBody;
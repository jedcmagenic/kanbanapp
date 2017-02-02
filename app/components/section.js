'use strict'

var React = require('react');
var Card = require('./card.js');

var Section = React.createClass({
    render: function(){
        return (
            <div className="col-md-12">
                <div className="panel panel-default">
                    <div className="panel-heading blue"><b>{this.props.title}</b> - {this.props.description}</div>
                    <div className="panel-body">
                        
                    </div>
                </div>
            </div>
            )
    }
});

module.exports = Section;
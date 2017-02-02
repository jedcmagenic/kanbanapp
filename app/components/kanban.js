'use strict'

var React = require('react');
var Section = require('./section.js');

var KanbanBoard = React.createClass({
    render: function(){
        return (
            <div className="container-fluid text-center">
                <h3>Kanban Page</h3>
            </div>
            )
    }
});

module.exports = KanbanBoard;
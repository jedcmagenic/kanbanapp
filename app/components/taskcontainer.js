'use strict'

var React = require('react');
var TaskList = require('./tasklist.js');

var tasks=[
    { id: 1, name: "Buy mountain bike", description: "The goal of this task is for you to have your own bike", priority: "Low", status: "Done" },
    { id: 2, name: "Buy car", description: "The goal of this task is for you to have your own car", priority: "Low", status: "To Do" },
    { id: 3, name: "Buy condominium", description: "The goal of this task is for you to have your own condo", priority: "Medium", status: "Done" },
    { id: 4, name: "Buy house and lot", description: "The goal of this task is for you to have a place for the entire famile", priority: "High", status: "To Do" },
    { id: 5, name: "Buy restaurant", description: "The goal of this task is for you to have your own business", priority: "High", status: "To Do" },
    { id: 6, name: "Buy company", description: "The goal of this task is for you to have your own life", priority: "Medium", status: "In Progress" },
]

var TaskContainer = React.createClass({
    render: function(){
        return (
            <div className="container-fluid">
                <div className="col-md-12">
                    <div className="panel panel-primary">
                        <div className="panel-heading">Task Master List </div>
                        <div className="panel-body">
                            <TaskList taskItems={tasks}/>
                        </div>
                    </div>
                </div>
                
            </div>
            )
    }
});

module.exports = TaskContainer;
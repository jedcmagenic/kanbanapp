'use strict'

var React = require('react');
var TaskList = require('./tasklist.js');
var TaskApi = require('../api/tasks-api.js');

var TaskContainer = React.createClass({
    render: function(){
        var tasks =JSON.parse(TaskApi.getItems());
        return (
            <div className="container-fluid">
                <div className="col-md-12">
                    <h2>Tasks Masterlist</h2>
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
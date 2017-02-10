'use strict'

var React = require('react');
var TaskList = require('./tasklist.js');
var TaskApi = require('../api/tasks-api.js');

var TaskContainer = React.createClass({
    getInitialState: function () {
        return {
            tasksData: JSON.parse(TaskApi.getItems())
        };
    },
    componentWillUpdate: function(){
    },
    handleRefreshButtonClick: function(){
        TaskApi.refreshData();
        this.setState({
            tasksData: JSON.parse(TaskApi.getItems())
        }, function(){
            this.render();
        });
    },
    handleAddTask: function(taskItems){
        // this.setState({
        //     tasksData: taskItems
        // });
        // TaskApi.setItems(this.state.tasksData);
    },
    handleUpdateTaskRepo: function(taskItems){
        this.setState({
            tasksData: taskItems
        }, function(){
            TaskApi.setItems(this.state.tasksData);
        });
    },
    render: function(){
        return (
            <div className="container-fluid">
                <div className="col-md-12">
                    <h2>Tasks Masterlist</h2>
                    <div className="panel panel-primary">
                        <div className="panel-heading">Task Master List </div>
                        <div className="panel-body">
                            <TaskList 
                                taskItems={this.state.tasksData}                                
                                onRefreshButtonClick={this.handleRefreshButtonClick} 
                                onSaveChanges={this.handleUpdateTaskRepo}
                                onTaskAdd={this.handleAddTask}/>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
});

module.exports = TaskContainer;
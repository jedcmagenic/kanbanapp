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
    handleRefreshButtonClick: function(){
        TaskApi.refreshData();
        this.setState({
            tasksData: JSON.parse(TaskApi.getItems())
        });
    },
    handleAddButtonClick: function(){

    },
    handleEditButtonClick: function(){

    },
    handleDeleteButtonClick: function(taskId){
        if(confirm("Are you sure you want to delete this item?")){
            var index = -1;	
            var taskListCount = this.state.tasksData.length;
      		for( var i = 0; i < taskListCount; i++ ) {
      			if( this.state.tasksData[i].id === taskId ) {
      				index = i;
      				break;
      			}
      		}
      		this.state.tasksData.splice( index, 1 );	
      		this.setState( {tasksData: this.state.tasksData} );
            alert("Item with task id = " +taskId+" deleted" );
        }
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
                                onRefreshButtonClick={this.handleRefreshButtonClick} 
                                taskItems={this.state.tasksData}
                                onTaskDelete={this.handleDeleteButtonClick}/>
                        </div>
                    </div>
                </div>
                
            </div>
            )
    }
});

module.exports = TaskContainer;
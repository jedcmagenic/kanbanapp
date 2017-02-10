'use strict'

var React = require('react');
var TaskItem = require('./task.js');
var _= require('lodash');

var TaskList = React.createClass({
    propTypes: {
        taskItems: React.PropTypes.array,
        onRefreshButtonClick: React.PropTypes.func.isRequired,
        onSaveChanges: React.PropTypes.func.isRequired,
        onTaskAdd: React.PropTypes.func.isRequired
    },
    getInitialState: function () {
        return {
            tasksData: [],
            sortOrder: {
                name: '',
                priorityId: '',
                statusId: ''
            }
        };
    },
    componentDidMount: function(){
        this.setState({ tasksData: this.props.taskItems });
    },
    generateNewId: function(){
        var maxObj = _.maxBy(this.state.tasksData, function(t){return t.id;});
        return maxObj.id + 1;
    },
    handleTaskAdd: function(){
        var newTask = {
            id: this.generateNewId(),
            name: '',
            description: '',
            priorityId: 1,
            statusId: 1,
            isEditable: true
        };
        var updatedTasks = this.state.tasksData.concat(newTask);
        this.setState( {tasksData: updatedTasks} );
        this.props.onTaskAdd(this.state.tasksData);
    },
    handleTaskEdit: function(task){
        var index = -1;	
        var taskListCount = this.state.tasksData.length;
        var updatedArray = this.state.tasksData.slice(); //Don't modify the state's tasksData array directly
        for( var i = 0; i < taskListCount; i++ ) {
            if( updatedArray[i].id === task.id ) {
                updatedArray[i].name = task.name;
                updatedArray[i].description = task.description;
                updatedArray[i].priorityId = task.priorityId;
                updatedArray[i].statusId = task.statusId;
                updatedArray[i].isEditable = false;
                break;
            }
        }
        this.setState( {tasksData: updatedArray} );
        
    },
    handleTaskDelete: function(taskId){
        if(confirm("Are you sure you want to delete this item?")){
            var index = -1;	
            var taskListCount = this.state.tasksData.length;
            var deletedTask = '';
            var updatedArray = this.state.tasksData; //Don't modify the state's tasksData array directly
            for( var i = 0; i < taskListCount; i++ ) {
                if( updatedArray[i].id === taskId ) {
                    index = i;
                    deletedTask = updatedArray[i].name;
                    break;
                }
            }
            updatedArray.splice( index, 1 );	
            this.setState( {tasksData: updatedArray} );
            alert("Item with task name: '" +deletedTask+"' has been deleted" );
        }
        
    },
    handleSaveChanges: function(){
        if(confirm("Are you sure you want to save your changes to localStorage?")){
            this.props.onSaveChanges(this.state.tasksData);
            alert("localStorage updated");
        }
    },
    renderItems: function () {
        return this.state.tasksData.map(function (item) {
            return (
                <TaskItem 
                    key={item.id} 
                    id={item.id} 
                    name={item.name} 
                    description={item.description} 
                    priorityId={item.priorityId} 
                    statusId={item.statusId}
                    isEditable={item.isEditable} 
                    onTaskDelete={this.handleTaskDelete}
                    onTaskEdit={this.handleTaskEdit}/>
            );
        }, this);
    },
    sortColumn: function(event){
        var columnType = event.currentTarget.dataset.columntype;
        var sortOrderObj = this.state.sortOrder;
        var sortOrder = !sortOrderObj[columnType] || sortOrderObj[columnType] == 'desc'? 'asc': 'desc'; 
        var sortedTasks = _.orderBy(this.state.tasksData, [columnType], [sortOrder]);
        sortOrderObj[columnType] = sortOrder;
        this.setState({
            tasksData: sortedTasks,
            sortOrder: sortOrderObj
        });
    },
    getSortIcon: function(column){
        var sortIconClass = '';
        switch(this.state.sortOrder[column])
        {
            case 'asc':
                sortIconClass = 'glyphicon glyphicon-triangle-bottom';
                break;
            case 'desc':
                sortIconClass = 'glyphicon glyphicon-triangle-top';
                break;
        }
        return sortIconClass;
    },
    render: function(){
        return (
            <div className="">
                <table className="table table-bordered table-responsive table-striped">
                    <thead className="tasks">
                        <tr>
                            <th className="text-center sortable" data-columnType="name" onClick={this.sortColumn}>Task Details<i className={this.getSortIcon('name')}></i></th>
                            <th className="text-center sortable" data-columnType="priorityId" onClick={this.sortColumn}>Priority<i className={this.getSortIcon('priorityId')}></i></th>
                            <th className="text-center sortable" data-columnType="statusId" onClick={this.sortColumn}>Status<i className={this.getSortIcon('statusId')}></i></th>
                            <th className="text-center">&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderItems()}
                    </tbody>
                </table>
                <div className="btn-toolbar">
                    <a href="#/taskList" className="btn btn-default btn-lg" onClick={this.props.onRefreshButtonClick}>
                        <span className="glyphicon glyphicon-refresh"></span> Reset localStorage
                    </a>
                    <a href="#/taskList" className="btn btn-primary btn-lg" onClick={this.handleTaskAdd}>
                        <span className="glyphicon glyphicon-plus"></span> Add Task
                    </a>
                    <a href="#/taskList" className="btn btn-success btn-lg right" title="Save changes to localStorage" onClick={this.handleSaveChanges}>
                        <span className="glyphicon glyphicon-floppy-disk"></span> Save
                    </a>
                </div>
            </div>
            )
    }
});

module.exports = TaskList;
'use strict'

var React = require('react');
var TaskItem = require('./task.js');

var TaskList = React.createClass({
    propTypes: {
        taskItems: React.PropTypes.array,
        onRefreshButtonClick: React.PropTypes.func.isRequired
    },
    renderItems: function () {
        return this.props.taskItems.map(function (item) {
            return (
                <TaskItem key={item.id} name={item.name} description={item.description} priority={item.priority} status={item.status} />
            );
        }, this);
    },
    render: function(){
        return (
            <div className="">
                <table className="table table-bordered table-responsive table-striped">
                    <thead className="tasks">
                        <tr>
                            <th className="text-center">Task Details</th>
                            <th className="text-center">Priority</th>
                            <th className="text-center">Status</th>
                            <th className="text-center">&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderItems()}
                    </tbody>
                </table>
                <a href="#/taskList" className="btn btn-info btn-lg" onClick={this.props.onRefreshButtonClick}>
                    <span className="glyphicon glyphicon-refresh"></span> Refresh
                </a>
            </div>
            )
    }
});

module.exports = TaskList;
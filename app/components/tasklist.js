'use strict'

var React = require('react');
var TaskItem = require('./task.js');

var TaskList = React.createClass({
    propTypes: {
        taskItems: React.PropTypes.array
    },
    render: function(){
        var tasks = [];
        this.props.taskItems.forEach(function(task) {
            tasks.push(<TaskItem name={task.name} description={task.description} priority={task.priority} status={task.status} />)
        });

        return (
            <div className="">
                <table className="table table-bordered table-responsive table-striped">
                    <thead className="tasks">
                        <tr>
                            <th className="text-center">Task Details</th>
                            <th className="text-center">Priority</th>
                            <th className="text-center">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks}
                    </tbody>
                </table>
            </div>
            )
    }
});

module.exports = TaskList;
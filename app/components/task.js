'use strict'

var React = require('react');

var TaskItem = React.createClass({
    propTypes: {
        id: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        priority: React.PropTypes.string.isRequired,
        status: React.PropTypes.string.isRequired,
        onTaskEdit: React.PropTypes.func.isRequired,
        onTaskDelete: React.PropTypes.func.isRequired
    },
    handleDeleteTask: function(){
        this.props.onTaskDelete(this.props.id);
    },
    render: function(){
        return (
            <tr>
                <td>
                    <h4 className="taskName">{this.props.name}</h4>
                    <h6 className="description">{this.props.description}</h6>
                </td>
                <td className="text-center middle">{this.props.priority}</td>
                <td className="text-center">{this.props.status}</td>
                <td className="text-center">
                    <button type="button" className="btn btn-primary glyphicon glyphicon-edit" onClick={this.props.onTaskEdit}></button>
                    <button type="button" className="btn btn-danger glyphicon glyphicon-trash" onClick={this.handleDeleteTask}></button>
                </td>                
            </tr>
            );
    }
});

module.exports = TaskItem;
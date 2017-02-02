'use strict'

var React = require('react');

var TaskItem = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        priority: React.PropTypes.string.isRequired,
        status: React.PropTypes.string.isRequired
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
            </tr>
            );
    }
});

module.exports = TaskItem;
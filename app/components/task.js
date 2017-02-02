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
                <td><div>{this.props.name}</div></td>
                <td className="text-center">{this.props.priority}</td>
                <td className="text-center">{this.props.status}</td>
            </tr>
            );
    }
});

module.exports = TaskItem;
'use strict'

var React = require('react');

var SortableHeader = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        headerClassName: React.PropTypes.string.isRequired,
        sortIconAscClassName: React.PropTypes.string.isRequired,
        sortIconDescClassName: React.PropTypes.string.isRequired,
        dataColumType: React.PropTypes.string.isRequired,
        onSort: React.PropTypes.func.isRequired
    },
    getInitialState: function () {
        return {
            sortOrder: '',
            sortIconClassName: '',
        };
    },
    componentDidMount: function(){
        //TODO
    },
    handleSort: function(){
        var sortIconClass = '';
        var newSortOrder = ''

        if(this.state.sortOrder && this.state.sortOrder == 'desc'){
            sortIconClass = this.props.sortIconDescClassName;
            newSortOrder = 'asc'
        }
        else{
            sortIconClass = this.props.sortIconAscClassName;
            newSortOrder = 'desc'
        }
        this.setState({
            sortOrder: newSortOrder,
            sortIconClassName: sortIconClass,
        }, function(){ 
            this.props.onSort(this.state.sortOrder, this.props.dataColumType);
        });
    },
    render: function(){
        return(
            <th className={this.props.headerClassName} data-columnType={this.props.dataColumType} onClick={this.handleSort}>
                {this.props.title}
                <i className={this.state.sortIconClassName}></i>
            </th>
        )
    }
});

module.exports = SortableHeader;
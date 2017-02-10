'use strict'

var React = require('react');
var _ = require('lodash');

var Paginator = React.createClass({
    propTypes: {
        listItems: React.PropTypes.array.isRequired,
        itemsPerPage: React.PropTypes.number.isRequired,
        totalListItemCount: React.PropTypes.number.isRequired,
        onPageChange: React.PropTypes.func.isRequired
    },
    getInitialState: function () {
        return {
            selectedPageNumber: 1,
            totalPages: 1,
            isPreviousButtonActive: false,
            isNextButtonActive: false
        };
    },
    componentWillMount: function(){
        this.setState({
            totalPages: (this.props.totalListItemCount + this.props.itemsPerPage - 1)/this.props.itemsPerPage
        });
        this.showPageItems();
    },
    renderPageButtons: function(){
        let pageArr =[]
        for (var index = 0; index < this.state.totalPages; index++) {
            if((index + 1) == this.state.selectedPageNumber){
                pageArr.push({
                    pageNumber: (index + 1),
                    className: "btn btn-primary"
                });
            }
            else{
                pageArr.push({
                    pageNumber: (index + 1),
                    className: "btn btn-default"
                });
            }
            
        }
        return pageArr.map(function (item) {
            return (
                <button 
                    key={item.pageNumber}
                    className={item.className} 
                    onClick={this.handlePageSelectClick}>
                    {item.pageNumber}
                </button>
            );
        }, this);
    },
    handlePreviousClick: function(){
        if(this.state.selectedPageNumber > 1){
            this.setState({
                selectedPageNumber: this.state.selectedPageNumber - 1
            }, this.showPageItems);
        }
    },
    handleNextClick: function(){
        if(this.state.selectedPageNumber < this.state.totalPages){
            this.setState({
                selectedPageNumber: this.state.selectedPageNumber + 1
            }, this.showPageItems);
        }
    },
    showPageItems: function(){
        let page = this.state.selectedPageNumber || 1,
	    offset = (this.state.selectedPageNumber - 1) * this.props.itemsPerPage,
	    paginatedItems = _.drop(this.props.listItems, offset).slice(0, this.props.itemsPerPage);
        this.props.onPageChange(paginatedItems);
    },
    handlePageSelectClick: function(event){
        this.setState({
                selectedPageNumber: event.currentTarget.innerHTML
        }, this.showPageItems);
    },
    render: function(){
        return(
            <div className="btn-group right">
                <button className="btn btn-default" onClick={this.handlePreviousClick}><i className="glyphicon glyphicon-chevron-left"></i> Prev</button>
                {this.renderPageButtons()}
                <button className="btn btn-default" onClick={this.handleNextClick}>Next <i className="glyphicon glyphicon-chevron-right"></i></button>
            </div>
        )
    }
});

module.exports = Paginator;
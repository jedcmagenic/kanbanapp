'use strict'

var React = require('react');
var ReactDOM = require('react-dom');
var PageHeader = require('./page-header.js');
var PageBody = require('./page-body.js');
var PageFooter = require('./page-footer.js');

var KanbanApplication = React.createClass({
    render: function(props){
        return (
            <div>
                <PageHeader text="This is the header" />
            </div>
        );
    }
});

var start = new Date().getTime();

setInterval(function(){
    ReactDOM.render(
        <KanbanApplication />,
        document.getElementById('root')
    );
}, 50);
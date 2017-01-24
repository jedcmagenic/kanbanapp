'use strict'

var React = require('react');
var Card = require('./card.js');

var Section = React.createClass({
    render: function(){
        return (
            <div className="col-md-12">
                <div className="panel panel-default">
                    <div className="panel-heading">{this.props.title}</div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-4">
                                <Card title="Card 1" description="Card 1 description" buttonText="Details" imageUrl="../images/jed.jpg"/>
                            </div>
                            <div className="col-md-4">
                                <Card title="Card 2" description="Card 2 description" buttonText="Details" imageUrl="../images/jollibee.png"/>
                            </div>
                            <div className="col-md-4">
                                <Card title="Card 3" description="Card 3 description" buttonText="Details" imageUrl="../images/mcdo.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
    }
});

module.exports = Section;
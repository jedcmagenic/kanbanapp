'use strict'

var React = require('react');

var Card = React.createClass({
    render: function(){
        return (
            <div className="card">
                <img src={this.props.imageUrl} alt="CardImage" styleName="width:100%" />
                <div className="container">
                    <h4><b>{this.props.title}</b></h4> 
                    <p>{this.props.description}</p> 
                    <a href="#" className="btn btn-primary">{this.props.buttonText}</a>
                </div>
            </div>
            )
    }
});

module.exports = Card;
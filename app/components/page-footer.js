'use strict'

var React = require('react');

var PageFooter = React.createClass({
    render: function(){
        return (
            <div className="col-md-12 navbar-fixed-bottom">
                <div className="col-md-6">
                    <h5 className="text-left">
                        {this.props.footerText}
                    </h5>
                </div>
                <div className="col-md-6">
                    <h5 className="text-right">
                        &copy; 
                        {this.props.copyrightText}
                    </h5>
                </div>
            </div>
            )
    }
});

module.exports = PageFooter;
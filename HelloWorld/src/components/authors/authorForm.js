"use strict";

var React = require('react');
//var Input = require('../common/textInput');

var AuthorForm = React.createClass({
	/*
    propTypes: {
		author:	React.PropTypes.object.isRequired,
		onSave:	React.PropTypes.func.isRequired,
		onChange: React.PropTypes.func.isRequired,
		errors: React.PropTypes.object
	},
    */

	render: function() {
		return (
			<form>
				<h1>Manage Author</h1>
                <label htmlFor="firstName">First Name</label>
				<input
                    type="text"
					name="firstName"
                    className="form-control"
					placeholder="First Name"
                    ref="firstName"
                    onChange={this.props.onChange}
					value={this.props.author.firstName}/>
                 <br />
                 <label htmlFor="lastName">Last Name</label>
				<input
                    type="text"
					name="lastName"
                    className="form-control"
					placeholder="Last Name"
                    ref="lastName"
                    onChange={this.props.onChange}
					value={this.props.author.lastName}/>
                 <br />

				<input type="submit" value="Save" className="btn btn-default" />
			</form>
		);
	}
});

module.exports = AuthorForm;
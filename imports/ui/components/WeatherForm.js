import React from 'react';

export default class WeatherForm extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}
	onFormSubmit(e) {
		e.preventDefault();

		let location = this.refs.location.value;

		if (location.length > 0) {
			this.refs.location.value = '';
			this.props.onSearch(location);
		}
	}
	render() {
		return (
			<div className="card-panel white">
				<form onSubmit={this.onFormSubmit}>
					<div>
						<input type="search" ref="location" placeholder="Search weather by city"/>
					</div>
					<div className="center-align">
						<button className="btn">Get Weather</button>
					</div>
				</form>
			</div>
		);
	}
}
import React from 'react';

//import nav

export default class About extends React.Component {
	render() {
		return (
			<div>
				<h1 className="center-align">About</h1>
				<ul className="collection with-header center-align">
					<li className="collection-header">
						<h5>This app was built by Simon Holm to test out the following development technologies.</h5>
					</li>
					<li className="collection-item">
						<a href="https://www.meteor.com">Meteor</a> - JavaScript platform.
					</li>
					<li className="collection-item">
						<a href="https://facebook.github.io/react">React</a> - The JavaScript framework used.
					</li>
					<li className="collection-item">
						<a href="http://materializecss.com">Materialize CSS</a> - Responsive CSS framework.
					</li>
					<li className="collection-item">
						<a href="http://openweathermap.org">Open Weather Map</a> - Provides API for weather forecasts.
					</li>
				</ul>
			</div>
		);
	}
}

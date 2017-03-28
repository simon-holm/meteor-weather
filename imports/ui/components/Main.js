import React from 'react';

import Nav from './Nav';

export default class Main extends React.Component {
	render() {
		return (
			<div className="col s12 m12">
				<Nav/>
				<div className="row">
					<div className="col s12 m10 offset-m1">
					{this.props.children}
					</div>
				</div> 
			</div>
		);
	}
}
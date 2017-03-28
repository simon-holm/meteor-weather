import React from 'react';
import {Link, IndexLink} from 'react-router';

export default class Nav extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.onSearch = this.onSearch.bind(this);
	}
	componentDidMount() {
		$(".button-collapse").sideNav();
	}
	onSearch(e) {
		e.preventDefault();

		let location = this.refs.search.value;
		console.log(location);
		let encodedLocation = encodeURIComponent(location);

		if (location.length > 0) {
			this.refs.search.value = '';
			window.location.hash = '#/?location='+ encodedLocation;
		}
	}

	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<a href="#" className="brand-logo center">METEOR WEATHER</a>
					<a href="#" data-activates="mobile-nav" className="button-collapse"><i className="material-icons">menu</i></a>
					<ul className="left hide-on-med-and-down">
						<li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Weather</IndexLink></li>
						<li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
						<li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
					</ul>
					<ul className="side-nav" id="mobile-nav">
						<li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Weather</IndexLink></li>
						<li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
						<li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
					</ul>
				
					<div className="input-field right hide-on-med-and-down">
						<form onSubmit={this.onSearch}>
							<div className="input-field">
								<input type="search" ref="search" id="search" placeholder="Search weather by city"/>
								<label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
							</div>
						</form>
					</div>
				</div>
			</nav>
		);
	}
}
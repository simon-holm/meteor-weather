import React from 'react';

//import nav

export default class Examples extends React.Component {
	linkBtn(location) {
		let encodedLocation = encodeURIComponent(location);
		window.location.hash = '#/?location='+ encodedLocation;
	}
	render() {
		return (
			<div className="col s12 m6 offset-m3">
            <h1 className="center-align">Examples</h1>
            <ul className="collection with-header center-align">
				<li className="collection-header"><h5>Here are a few example locations to try out</h5></li>
                <li className="collection-item">
                    <button className="waves-effect waves-light btn" onClick={() => {this.linkBtn('Ystad')}}>Ystad, Sweden</button>
                </li>
                <li className="collection-item">
					<button className="waves-effect waves-light btn" onClick={() => {this.linkBtn('Stockholm')}}>Stockholm, Sweden</button>
                </li>
                <li className="collection-item">
					<button className="waves-effect waves-light btn" onClick={() => {this.linkBtn('Billinga')}}>Billinga, Australia</button>
                </li>
                <li className="collection-item">
					<button className="waves-effect waves-light btn" onClick={() => {this.linkBtn('Wellington')}}>Wellington, New Zealand</button>
                </li>
                <li className="collection-item">
					<button className="waves-effect waves-light btn" onClick={() => {this.linkBtn('Winnipeg')}}>Winnipeg, Canada</button>
                </li>
            </ul>
        </div>
		);
	}
}
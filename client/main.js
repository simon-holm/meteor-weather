import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from './../imports/ui/components/Main';
import Weather from './../imports/ui/components/Weather';
import About from './../imports/ui/components/About';
import Examples from './../imports/ui/components/Examples';

import { getLatLong } from '../imports/api/Geocode';


const router = (
	<Router history={hashHistory}>
        <Route path="/" component={Main}>
			<Route path="/about" component={About}/>
			<Route path="/examples" component={Examples}/>
			<IndexRoute component={Weather}/>
		</Route>
    </Router>
);

Meteor.startup(() => {
    ReactDOM.render(router, document.getElementById('app'));
	getLatLong("Ystad");
});

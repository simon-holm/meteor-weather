import React from 'react';
import {Session} from 'meteor/session';
import {Tracker} from 'meteor/tracker';
import buildReportDaysList from './../../api/WeatherLogic';

export default class WeatherMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pictureURL: '',
        }
    }

    componentDidMount() {
		this.pictureTracker = Tracker.autorun(() => {
			let sessionVal = Session.get('picURL');
			this.setState({
				pictureURL: sessionVal,
			});
		});
    }

	componentWillUnmount() {
		this.pictureTracker.stop();
	}

    render() {
        let weatherlist = this.props.data.list;
	    let reportDays = buildReportDaysList(weatherlist);

        return (
            <div>
                <div className="row">
                    <div className="col s12 m12 l8 offset-l2">
                        <div className="card">
                            <div className="card-image">
                                <img src={this.state.pictureURL} alt={this.props.location}/>
                                <span className="card-title"><h4>{this.props.location}</h4></span>
                            </div>
                            <div className="card-content">
                                <h5>Its currently {this.props.description} and {this.props.temp} degrees celsius in {this.props.location}!</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 className="center">5 day outlook for {this.props.location}</h4>
                <div className="row">
                
                {reportDays.map((day, index) => {
                    return (
                        <div key={index} className="col s12 m6 l4">
                            <div className="card">
                                <div className="card-image">
                                    <img src="./images/weather_icon.png" alt="weather image"/>
                                    <span className="card-title">{day}</span>
                                </div>
                                <ul className="collection">
                                {weatherlist.map((report, index) => {
                                    let time = report.dt_txt.split(" ")[1].substr(0, 5);
                                    if (report.dt_txt.split(" ")[0] === day) {
                                        return (
                                            <li key={index} className="collection-item">Time: <strong>{time}</strong><br/>Conditions: <strong>{report.weather[0].description}</strong> & <strong>{report.main.temp}&deg;C</strong></li>
                                        );
                                    }
                                })}
                                </ul>
                            </div>
                        </div>
                    );
                })}

                </div>
            </div>
        );
    }
}



// return (
// 					<div key={index}>
// 						<h4>{weather.dt_txt}</h4>
// 						<p>Temperature: {weather.main.temp} celcius</p>
// 						<p>Conditions: {weather.weather[0].main}, {weather.weather[0].description}</p>
// 					</div> );

// AIzaSyCcDz1YXOuGPqSyZU20YHdrR49oll65ImI   //Google Places API key

//https://maps.googleapis.com/maps/api/place/photo?location=-55.4297,13.8204&maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=YOUR_API_KEY

//https://maps.googleapis.com/maps/api/place/photo?location=-55.4297,13.8204&maxwidth=400&&key=YOUR_API_KEY

// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=55.4297,13.8204&radius=500&type=restaurant&keyword=cruise&key=AIzaSyCcDz1YXOuGPqSyZU20YHdrR49oll65ImI
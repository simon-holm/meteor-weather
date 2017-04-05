import React from 'react';

import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import getWeather from '../../api/openWeatherMap';
import {getLatLong} from '../../api/Geocode';

export default class Weather extends React.Component {
	constructor() {
		super();
		this.state = {isLoading: false};
		this.handleSearch = this.handleSearch.bind(this);
		this.componentDidMount = this.componentDidMount.bind(this);
		this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
	}

	handleSearch(location) {
		let that = this;

		this.setState({
			isLoading: true,
			errorMessage: undefined,
			location: undefined,
			temp: undefined,
			data: undefined
		});


		getWeather(location).then((data) => {
			that.setState({
				location: data.city.name,
				temp: data.list[0].main.temp,
				description: data.list[0].weather[0].description,
				isLoading: false,
				data: data
			});
			getLatLong(data.city.name).then((geodata) => {
				console.log(geodata);
			})
		}, (e) => {
			that.setState({
				isLoading: false,
				errorMessage: e.message
			});
		});
	}

	componentDidMount() {
		let location = this.props.location.query.location;

		if (location && location.length > 0) {
			this.handleSearch(location);
			window.location.hash = '#/';
		}
	}

	componentWillReceiveProps(newProps) {
        var location = newProps.location.query.location;

        if (location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    }

	render() {
		let {isLoading, temp, location, description, errorMessage, data} = this.state;

		renderMessage = () => {
			if (isLoading) {
				return <h3 className="text-center">Fetching weather...</h3>;
			} else if (temp && location && description) {
                return <WeatherMessage description={description} location={location} temp={temp} data={data}/>;
			}
		}
		renderError = () => {
			if (typeof errorMessage === 'string') {
				return (<ErrorModal message={errorMessage}/>)
			}
		}

		return (
			<div>
				<div className="col s12 m8 offset-m2 l6 offset-l3">
					<h1 className="center-align">What's the weather like?</h1>
                	<WeatherForm onSearch={this.handleSearch}/>
				</div>
				<div className="col s12 m12">
					{renderMessage()}
                	{renderError()}
				</div>
                
			</div>
		);
	}
}
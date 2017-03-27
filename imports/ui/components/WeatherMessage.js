import React from 'react';

export default  WeatherMessage = ({temp, location, description, data}) => {
	let weatherlist = data.list;
	return (
		<div>
			<div>
				<h3>Its currently {description} and {temp} degrees celsius in {location}!</h3>
			</div>
			<h4>5 day outlook for {location}</h4>
			{weatherlist.map((weather, index) => {
				return (
					<div key={index}>
						<h4>{weather.dt_txt}</h4>
						<p>Temperature: {weather.main.temp} celcius</p>
						<p>Conditions: {weather.weather[0].main}, {weather.weather[0].description}</p>
					</div>
				);
			})}
		</div>
	);
}
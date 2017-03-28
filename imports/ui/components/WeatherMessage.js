import React from 'react';

export default  WeatherMessage = ({temp, location, description, data}) => {
	
	weatherReportFull = [];
	uniqueDays = [];
	
	let weatherlist = data.list;

	weatherlist.map((weather, index) => {
		let uniqueDate = weather.dt_txt.split(" ");
		let uniqueDay = uniqueDate[0];
		let uniqueTime = uniqueDate[1];

		if (uniqueDays.indexOf(weather.dt_txt.split(" ")[0]) === -1) {
			uniqueDays.push(weather.dt_txt.split(" ")[0]);
		}
		
	});
	console.log(uniqueDays);
	debugger;
	return (
		<div>
			<div className="row">
				<div className="col s12 m8 offset-m2">
					<div className="card">
						<div className="card-image">
							<img src="https://photos.smugmug.com/Landscapes/Panoramics/i-7S2gZ56/0/M/Heading%20to%20the%20key%20summit%20distant%20rain%20storm%20and%20light%20play-M.jpg" alt="{location} weather pic"/>
							<span className="card-title">{location}</span>
						</div>
						<div className="card-content">
							<p>Its currently {description} and {temp} degrees celsius in {location}!</p>
						</div>
					</div>
				</div>
			</div>
			<h4>5 day outlook for {location}</h4>
			{weatherlist.map((weather, index) => {
				let uniqueDate = weather.dt_txt.split(" ");
				let uniqueDay = uniqueDate[0];
				let uniqueTime = uniqueDate[1];

				if (weather.dt_txt.split(" ")[0] == uniqueDay) {
					return (
						<div className="col s12 m8 offset-m2">
							<div className="card" key={uniqueDay}>
								<span className="card-title">{uniqueDay}</span>
							</div>
							<div className="card-content">
								<p>Its currently {description} and {temp} degrees celsius in {location}!</p>
							</div>
						</div>
						)
					
				} else {
					let uniqueDay = weather.dt_txt.split(" ")[0];
				}
					
				
			})}
		</div>
	);
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
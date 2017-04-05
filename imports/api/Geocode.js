import axios from 'axios';

//google Geocode URL 
const geocodeUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=";
const googleAPIkey = "&key=AIzaSyCbSJwkG3zFJpzghzABdWFRa0W46A8a4T0";

export const getLatLong = (city) => {
	const encodedCity = encodeURIComponent(city);
	const builtUrl = `${geocodeUrl}${encodedCity}${googleAPIkey}`;

	return axios.get(builtUrl).then((res) => {
		console.log(res);
		return res.data.results[0].geometry.location;
		}).catch((err) => {
			console.log(err);
		});
};






// AIzaSyCcDz1YXOuGPqSyZU20YHdrR49oll65ImI   //Google Places API key

//https://maps.googleapis.com/maps/api/place/photo?location=-55.4297,13.8204&maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=YOUR_API_KEY

//https://maps.googleapis.com/maps/api/place/photo?location=-55.4297,13.8204&maxwidth=400&&key=YOUR_API_KEY

// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=55.4297,13.8204&radius=500&type=restaurant&keyword=cruise&key=AIzaSyCcDz1YXOuGPqSyZU20YHdrR49oll65ImI
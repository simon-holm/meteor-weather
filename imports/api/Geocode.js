import axios from 'axios';

const geocodeApiKey = "&key=AIzaSyCbSJwkG3zFJpzghzABdWFRa0W46A8a4T0";
const placesApiKey = "&key=AIzaSyDnL97GNXpGjSGApcCNHZGymxUVEO4Do_c";
const geocodeUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=";
const googlePlaceUrl = "https://maps.googleapis.com/maps/api/place/radarsearch/json?location=";
const radius = "&radius=5000";
const placeType = "&type=point_of_interest"; // Set type!

export const getLatLong = (city) => {
	const encodedCity = encodeURIComponent(city);
	const geoUrl = `${geocodeUrl}${encodedCity}${geocodeApiKey}`;

	axios.get(geoUrl).then((res) => {
		console.log("geoPosition");
		console.log(res.data.results[0].geometry.location);
		const latLng = res.data.results[0].geometry.location;
		return latLng;
		}).then((latLng) => {
			console.log(latLng);
			const lat = latLng.lat;
			const lng = latLng.lng;
			const placesUrl = `${googlePlaceUrl}${lat},${lng}${radius}${placeType}${placesApiKey}`;
			console.log(placesUrl);
			return placesUrl;
		}).then((placesUrl) => {
			axios.get(placesUrl).then((res) => {
				console.log(res.data);
			})
		})
	// Make call to google Places
		// return place picture reference.

	// const pictureRef = (geoPosition) => {
	// 	const lat = geoPosition.latitude;
	// 	const lng = geoPosition.longitude;
	// 	const placesUrl = `${googlePlaceUrl}${lat},${lng}${radius}${placeType}${geocodeApiKey}`;

	// 	const retreivedRef = axios.get(placesUrl).then((res) => {
	// 		console.log("CHECK THIS OUT RETRIEVED REF");
	// 		console.log(res.data);
	// 		return res.data.XXXXX; //check the API response!
	// 	});
	// 	console.log('from geocode');
	// 	console.log(retreivedRef);
	// 	return retreivedRef;
	// }
	// console.log('from geocode - pictureRef'); 
	// console.log(pictureRef);
	// return pictureRef;

	// make call to google pictures
		// return picture href
	


};






// AIzaSyCcDz1YXOuGPqSyZU20YHdrR49oll65ImI   //Google Places API key

// https://maps.googleapis.com/maps/api/place/radarsearch/json?location=51.503186,-0.126446&radius=5000&type=museum&key=

//https://maps.googleapis.com/maps/api/place/photo?location=-55.4297,13.8204&maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=YOUR_API_KEY

//https://maps.googleapis.com/maps/api/place/photo?location=-55.4297,13.8204&maxwidth=400&&key=YOUR_API_KEY

// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=55.4297,13.8204&radius=500&type=restaurant&keyword=cruise&key=AIzaSyCcDz1YXOuGPqSyZU20YHdrR49oll65ImI
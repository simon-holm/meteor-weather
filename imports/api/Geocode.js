import axios from 'axios';
import {Meteor} from 'meteor/meteor';
import {Session} from 'meteor/session';

const geocodeApiKey = "&key=AIzaSyCbSJwkG3zFJpzghzABdWFRa0W46A8a4T0";
const placesApiKey = "&key=AIzaSyDnL97GNXpGjSGApcCNHZGymxUVEO4Do_c";
const geocodeUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=";
const googlePlaceUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=";
const googlePictureUrl = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference="
const radius = "&radius=5000";
const placeType = "&type=natural_feature, point_of_interest"; // Set type! natural_feature


const geoCodeCityToLatLng = (city) => {
	const encodedCity = encodeURIComponent(city);
	const geoUrl = `${geocodeUrl}${encodedCity}${geocodeApiKey}`;

	const location = axios.get(geoUrl).then((response) => {
		const latLng = response.data.results[0].geometry.location;
		return latLng;
	});
	return location;
};

const buildPlacesURL = (latLngObj) => {
	const lat = latLngObj.lat;
	const lng = latLngObj.lng;
	const placesURL = `${googlePlaceUrl}${lat},${lng}${radius}${placeType}${placesApiKey}`;
	return placesURL;
};

const callWithPromise = (method, myParameters) => {
    return new Promise((resolve, reject) => {
        Meteor.call(method, myParameters, (err, res) => {
            if (err) reject('Something went wrong');
            resolve(res);
        });
    });
}

export const getPicUrl = (city) => {
	Session.set('picURL', 'http://www.brainpecks.com/wp-content/uploads/2014/02/loading-1.gif'); //set to a temp loading gif
    geoCodeCityToLatLng(city)
		.then((response) => {
			const placeURL = buildPlacesURL(response);
            callWithPromise('google.placesData', placeURL)
                .then((response) => {
                    let pictureRefList = [];
                    response.map((place) => {
                        if (place.photos) {
                            place.photos.map((photo) => {
                                pictureRefList.push(photo.photo_reference)
                            });
                        }
                    });
                    const selectedPicture = pictureRefList[Math.floor(Math.random()*pictureRefList.length)];
                    Session.set('picURL', `${googlePictureUrl}${selectedPicture}${placesApiKey}`);
                });    
		});
}




// export const getLatLong = (city) => {
// 	const encodedCity = encodeURIComponent(city);
// 	const geoUrl = `${geocodeUrl}${encodedCity}${geocodeApiKey}`;

// 	axios.get(geoUrl).then((res) => {
// 		console.log("geoPosition");
// 		console.log(res.data.results[0].geometry.location);
// 		const latLng = res.data.results[0].geometry.location;
// 		return latLng;
// 		}).then((latLng) => {
// 			console.log(latLng);
// 			const lat = latLng.lat;
// 			const lng = latLng.lng;
// 			const placesUrl = `${googlePlaceUrl}${lat},${lng}${radius}${placeType}${placesApiKey}`;
// 			console.log(placesUrl);
// 			return placesUrl;
// 		}).then((placesUrl) => {
// 			axios.get(placesUrl).then((res) => {
// 				console.log(res);
// 			})
// 		})


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
	








// AIzaSyCcDz1YXOuGPqSyZU20YHdrR49oll65ImI   //Google Places API key

// https://maps.googleapis.com/maps/api/place/radarsearch/json?location=51.503186,-0.126446&radius=5000&type=museum&key=

//https://maps.googleapis.com/maps/api/place/photo?location=-55.4297,13.8204&maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=YOUR_API_KEY

//https://maps.googleapis.com/maps/api/place/photo?location=-55.4297,13.8204&maxwidth=400&&key=YOUR_API_KEY

// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=55.4297,13.8204&radius=500&type=restaurant&keyword=cruise&key=AIzaSyCcDz1YXOuGPqSyZU20YHdrR49oll65ImI




/// https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CoQBdwAAACEg1B1F6t--B9fDqw2yJvshagOKh9qNcvdxnO3fE60-ecjJuAVk0OMZzuwZxOhhV1mVMOggZ3aAjg6711WQQcgJAlX22WUMUeRF6y04x8_lRSJ28UZYRptlg0xSdcttbOyhPSuog4aomqryaZEBZ1Wc_ds4Vlo5UA2c1v2bte_6EhCmZ2V7FsdSm-1K-HkLJkmOGhRx5eT4VN0x2VwLkFVU3ddRnfGURw&key=AIzaSyDnL97GNXpGjSGApcCNHZGymxUVEO4Do_c
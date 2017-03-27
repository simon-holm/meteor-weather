import axios from 'axios';

//URL
const OPEN_WEATHER_MAP_URL = 'https://crossorigin.me/http://api.openweathermap.org/data/2.5/forecast?';
const FORMAT = 'metric';
const APIKEY = 'e6d4d600af44fb788e52102d2c5198b0';

export default getWeather = (location) => {
	let encodedLocation = encodeURIComponent(location);
	let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}&units=${FORMAT}&appid=${APIKEY}&mode=json`;
	//temp
	console.log(requestUrl);

	return axios.get(requestUrl).then((res) => {
		if (res.data.cod !== '200' && res.data.message) {
			throw new Error(res.data.message);
		} else {
			return res.data;
		}
	}, (res) => {
		throw new Error(res.data.message);
	});
} 
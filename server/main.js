import { Meteor } from 'meteor/meteor';
import { getLatLong } from '../imports/api/Geocode';
import axios from 'axios';

Meteor.methods({
    'google.placesData'(url) {
        placeData = axios.get(url).then((response) => {
            return response.data.results;
        });
        return placeData;
    }
})

Meteor.startup(() => {
  // code to run on server at startup
});

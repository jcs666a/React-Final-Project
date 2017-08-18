const apiBuilder = require('./apiBuilder');
const utilities = require('../utilities/index');
// Constants, por alguna razon SEARCHARTIST viene "UNDEFINED"
const {
  AUTHORIZE,
  PROFILE,
  SEARCHARTIST
} = require('../constants/endpoints');
const {
  APP_IP,
  CLIENT_ID
} = require('../constants/index');

function authorizeMe(that){
	apiBuilder({
      url: utilities.stringReplace(AUTHORIZE,[CLIENT_ID,APP_IP])
    }).then((response) => {
      that.okReturned(response);
    }).catch((error) => {
      that.errorReturned(error);
    });
}

function myProfile(that){
	apiBuilder({
		url: PROFILE,
		headers: {
			Authorization: 'Bearer ' + that.state.spotifyAccessToken
		}
	}).then((response) => {
		let data=response._bodyInit;
		data=JSON.parse(data);
		that.setState({
			isLoading: false,
			userName: data.display_name,
			userID: data.id
		}, function(){
		});
	}).catch((error) => {
		that.errorReturned(error);
	});
}

function searchArtist(that,ds){
//	SEARCHARTIST viene "UNDEFINED", puse temporalmente la ruta completa a la API
	console.log(SEARCHARTIST);
	apiBuilder({
		url: utilities.stringReplace('https://api.spotify.com/v1/search?q=%s&type=artist',[encodeURI(that.state.searchText)]),
		headers: {
			Authorization: 'Bearer ' + that.state.spotifyAccessToken
		}
	}).then((response) => {
		let data=response._bodyInit;
		data=JSON.parse(data);
		data=data.artists.items;
		that.setState({
			isLoading: false,
			searchArtistResponse: ds.cloneWithRows(data)
		}, function(){
		});
	}).catch((error) => {
		console.log(error);
	});
}

module.exports = {
	authorizeMe,
	myProfile,
	searchArtist
};

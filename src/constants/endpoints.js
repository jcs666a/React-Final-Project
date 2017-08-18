const mainUrl = 'https://api.spotify.com/v1/';

module.exports = {
	AUTHORIZE: 'https://accounts.spotify.com/authorize/?client_id=%s&response_type=token&redirect_uri=exp%3A%2F%2F%s%3A19000&scope=user-read-private%20user-read-email&state=34fFs29kd09',
	PROFILE: `${mainUrl}me`
};

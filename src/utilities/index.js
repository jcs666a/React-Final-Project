
function getAccessToken(response) {
	let spotifyAccessToken;
	let spotifyTokenType;

  if(response.headers.map.location){
    let responseSplit = response.headers.map.location[0].split('#');
        responseSplit = responseSplit[1].split('&');
    spotifyAccessToken = responseSplit[0].split('=');
    spotifyAccessToken = spotifyAccessToken[1];
    spotifyTokenType = responseSplit[1].split('=');
    spotifyTokenType = spotifyTokenType[1];
  }

  return {
  	spotifyAccessToken,
  	spotifyTokenType
  }
}

function isNumber(value) {
  return !isNaN(value);
}

function stringReplace(string, injectedStrings){
  if (injectedStrings && injectedStrings instanceof Array) {
      injectedStrings.forEach( value => {
          string = string.replace(/%s/, value);
      });
  }

  return string;
}

module.exports = {
    getAccessToken,
    isNumber,
    stringReplace
};

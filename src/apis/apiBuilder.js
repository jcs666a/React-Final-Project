function apiBuilder(data){
	let newHeaders;

	if(data.headers){
		newHeaders = {
			headers: {
				'Authorization': data.headers.Authorization, 
				'Content-Type': 'application/json'
			}
		};
	} else {
		newHeaders = {};
	}

	return fetch(data.url,newHeaders);
}

module.exports = apiBuilder;

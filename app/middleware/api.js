const API_ROOT = 'http://www.omdbapi.com/';

function callApi(endpoint) {
	const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;
	return fetch(url)
		.then(response => {
			response.json().then(json => ({ json, response }))
		}
		).then(({ json, response }) => {
			if (!response.ok) {
				return Promise.reject(json);
			}
			return Object.assign({}, json, {});
		);
	});
};


export function fetchMovies(key) {
}
var {
	FETCH_MOVIES,
	REQUEST_MOVIES,
	RECEIVE_MOVIES
} = require('./types');

var reducers = {

	requestMovies: function(key) {
		return {
			type: REQUEST_MOVIES,
			key
		};
	},

	receiveMovies: function(movies) {
		return {
			type: RECEIVE_MOVIES,
			movies
		};
	},

	fetchMovies: function(key) {
		return dispatch =>
			fetch('http://www.omdbapi.com/?s=' + key)
				.then(response => {
					response.json().then(function(data) {  
						dispatch(reducers.receiveMovies(data.Search))
					});
				})
				.catch(error => { console.log('request failed', error); });
	}

};

module.exports = reducers;
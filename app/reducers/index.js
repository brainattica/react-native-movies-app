var {
	FETCH_MOVIES,
	RECEIVE_MOVIES
} = require('../actions/types');

module.exports = {
	
	movies: function(state = { items: [] }, action) {
		switch (action.type) {
			case RECEIVE_MOVIES:
				console.log('INSIDE REDUCER', action.movies)
				return Object.assign({}, state, {
					items: action.movies
				});
			default:
				return state;
		}
	}

};
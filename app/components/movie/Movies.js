var React = require('react-native');
var {
	ScrollView
} = React;

class Movies extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			movies: []
		};
	}

	componentWillReceiveProps(props) {
		console.log('props', props)
		this.setState({
			movies: props.movies
		});
	}

	render() {
		console.log('this.state', this.state)
		var movies = this.state.movies.map(movie => {
			return <MovieItem title={movie.Title} year={movie.Year} poster={movie.Poster} type={movie.Type} />
		});
		return (
			<ScrollView>
	          {movies}
	        </ScrollView>
	    );
	}

}

module.exports = Movies;
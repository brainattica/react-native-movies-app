/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var SearchInput = require('./app/components/SearchInput');
var Container = require('./app/components/layout/Container');
var Button = require('./app/components/buttons/Button');
var MovieItem = require('./app/components/movie/MovieItem');


var Store = require('./app/store/Store');
var {
  fetchMovies
} = require('./app/actions/index');

var {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Animated,
  ScrollView,
  ToolbarAndroid
} = React;


var styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#9999ff',
    height: 56,
  },
});


class MoviesBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  onChangeText(text) {
    if (text.length >= 2) {
      Store.dispatch(fetchMovies(text));
    } else {
      this.setState({
        movies: []
      });
    }
  }

  componentDidMount() {
    Store.subscribe(() => {
      this.setState({
        movies: Store.getState().movies.items
      });
    });
  }
  
  onActionSelected() {

  }

  render() {
    return (
      <View>  
        <ToolbarAndroid
          title='Movies App'
          style={styles.toolbar}
          actions={[{title: 'Settings', show: 'always'}]}
          onActionSelected={this.onActionSelected} />
        <Container>
          <SearchInput onChangeText={this.onChangeText.bind(this)}/>
          <ScrollView>
            {
              this.state.movies.map(movie => {
                return <MovieItem title={movie.Title} year={movie.Year} poster={movie.Poster} type={movie.Type} />
              })
            }
          </ScrollView>
        </Container>
      </View>
    );
  }

}

AppRegistry.registerComponent('AwesomeProject', () => MoviesBox);

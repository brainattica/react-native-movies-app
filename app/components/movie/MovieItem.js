var React = require('react-native');
var {
	View,
	Text,
	Image
} = React;

const containerStyle = {
	backgroundColor: '#f8f8f8',
	padding: 10,
	marginBottom: 5,
	borderRadius: 10,
	flexDirection:'row'
};

const titleStyle = {
	fontSize: 18,
	fontWeight: 'bold'
};

class MovieItem extends React.Component {

	render() {
		var imageUrl = this.props.poster == 'N/A' ? 'http://img1.wikia.nocookie.net/__cb20141028171337/pandorahearts/images/a/ad/Not_available.jpg' : this.props.poster; 
		return (
			<View style={containerStyle}>
				<Image
					style={{width: 70, height: 70, marginRight: 10}}
					source={{uri: imageUrl}} />
				<View>
					<Text style={titleStyle}>{this.props.title}</Text>
					<Text>{this.props.year}</Text>
					<Text>{this.props.type}</Text>
				</View>
			</View>
		);
	}

}

module.exports = MovieItem;
var React = require('react-native');
var {
	Text
} = React

var style = {
	ios: {
		background: 'blue',
		color: 'white',
		padding: 10,
		cursor: 'pointer'
	}
};

class Button extends React.Component {

	render() {
		return <Text style={style.ios} onPress={this.props.onPress}>{this.props.children}</Text>
	}

}

module.exports = Button;
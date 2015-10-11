var React = require('react-native');
var {
	View
} = React;

class Container extends React.Component {

	render() {
		return (
			<View style={{padding: 15, flex: 1}} >
				{this.props.children}
			</View>
		);
	}

}

module.exports = Container;
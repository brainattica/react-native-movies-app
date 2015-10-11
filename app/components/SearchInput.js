var React = require('react-native');
var {
	TextInput
} = React;

class SearchInput extends React.Component {

	render() {
		return (
			<TextInput
		        style={{height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10}}
		        onChangeText={this.props.onChangeText} />
		);
	}

}

module.exports = SearchInput;
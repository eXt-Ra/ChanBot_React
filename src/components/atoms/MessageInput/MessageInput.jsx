import React from 'react';

class MessageInput extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <input type="text" ref={(input) => { this.textInput = input; }}  onChange={() => this.props.onChangeInput(this.textInput)} />;
	}
}

export default MessageInput;

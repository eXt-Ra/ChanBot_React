import React from 'react';
import MessageInput from './../../atoms/MessageInput/MessageInput.jsx';
import SendButton from './../../atoms/SendButton/SendButton.jsx';
import api from './../../../api/query.js';


class TypingBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: ""
		};

		this.handleSendButtonClik = this.handleSendButtonClik.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(el){
		this.setState({
			inputValue: el.value
		})
	}

	handleSendButtonClik() {
		api(this.state.inputValue).then(res => {
			console.log(res);


		})
	}

	render() {
		return <div>
			<MessageInput onChangeInput={this.onInputChange}/>
			<SendButton buttonContent={"LA"} actionClick={this.handleSendButtonClik}/>
		</div>;
	}
}

export default TypingBar;

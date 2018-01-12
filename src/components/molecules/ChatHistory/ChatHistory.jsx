import React from 'react';
import Message from './../../atoms/Message/Message';

class ChatHistory extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <div>
			<Message text={"Salut"} type={"my"}/>
			<Message text={"Salut"} type={"their"}/>
		</div>;
	}
}

export default ChatHistory;

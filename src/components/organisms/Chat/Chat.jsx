import React from 'react';
import ChatHistory from './../../molecules/ChatHistory/ChatHistory.jsx';
import TypingBar from './../../molecules/TypingBar/TypingBar.jsx';

class Chat extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			listMessages: [
				{
					type: "my",
					content: <p> Salut bernard</p>
				}
			]
		}
	}

	addMessage(responseTable) {
		if (responseTable[0][1] !== 0.0) {
			// ajout du message
		} else {
			this.setState({
				listMessages: this.state.listMessages.push(
					{
						type: "their",
						content: <p>Je n&quot;ai pas compis votre demande</p>

					})
			})
		}
		//function

		//ajouter le message
	}

	render() {
		return <div>
			<ChatHistory/>
			<TypingBar/>
		</div>;
	}
}

export default Chat;

import React, {Component} from 'react';
import './Message.scss';

import { Button } from 'semantic-ui-react';

import Typing from './../Typing/Typing.jsx';

class Message extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <div className={`message ${ this.props.type }`}>
			{this.props.text === "" ? <Typing/> : <p>{this.props.text}</p>}

			{/*<Button.Group vertical>*/}
				{/*<Button>Feed</Button>*/}
				{/*<Button>Messages</Button>*/}
				{/*<Button>Events</Button>*/}
				{/*<Button>Photos</Button>*/}
			{/*</Button.Group>*/}
		</div>;
	}
}

export default Message;

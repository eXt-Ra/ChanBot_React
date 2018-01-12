import React, {Component} from 'react';
import './Typing.scss'

class Typing extends React.Component {
	render() {
		return <div className="typing-indicator">
			<span></span>
			<span></span>
			<span></span>
		</div>;
	}
}

export default Typing;

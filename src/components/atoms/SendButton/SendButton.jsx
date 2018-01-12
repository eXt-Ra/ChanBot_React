import React from 'react';

class SendButton extends React.Component {
		constructor(props){
			super(props);
		}
    render() {
        return <button  onClick={this.props.actionClick}>{this.props.buttonContent}</button>;
    }
}

export default SendButton;

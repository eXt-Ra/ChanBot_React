import React from 'react';
import 'normalize.css';
import 'styles/index.scss';

import Message from './components/atoms/Message/Message.jsx';

const App = () => (
  <div className='App'>
    <Message type={"my"} text={"Salut"}/>
    <Message type={"their"} text={"Hey"}/>
    <Message type={"my"} text={"tu vas bien ?"}/>
		<Message type={"their"} text={""}/>
  </div>
);

export default App;

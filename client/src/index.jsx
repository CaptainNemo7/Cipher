import React, { Component } from 'react';
import ReactDOM  from 'react-dom';
import Dropdown from 'react-dropdown';
import Message from './components/message.jsx';
import UserInput from './components/userInput.jsx';
import cipher from '../../helperFunctions/caesarCipherAlgo.js'

const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25 , 26]
// const options = ['1', 2, 3]
const defaultOption = options[1]
export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userMessage: '',
			encryptedMessage: '',
			decryptedMessage: '',
			shiftKey: '',
		}
		this.encrypt = this.encrypt.bind(this);
		this.decrypt = this.decrypt.bind(this);
		this.bruteForce = this.bruteForce.bind(this);
		this.userInput = this.userInput.bind(this);
		this.onKeyChange = this.onKeyChange.bind(this);
	}

	

	userInput(message) {
		this.setState({
			userMessage: message
		})

	}

	encrypt(message, {key = this.state.shiftKey}) {
		console.log('message in encrypt func index: ',  message)
		// key = 2
		console.log('key in encrypt func index: ',  key)
		console.log('encrypted message: ',cipher.encrypt(message, key))
		// let encrypted = cipher.encrypt(messsage, key);
		// console.log('encrypted message : ',encrypted)
		this.setState({
			encryptedMessage: cipher.encrypt(message, key)
		})
	}

	onKeyChange(e) {
		this.setState({
			shiftKey: e.value
		})
		console.log('after: ',this.state.shiftKey)
	}

	decrypt(message, {key = this.state.shiftKey}) {
		this.setState({
			decryptedMessage: cipher.decrypt(message, key)
		})
	}

	bruteForce(message) {
		this.setState({
			encryptedMessage: cipher.bruteForce(message)
		})
	}


  render() {
    return (
    	<div>
    		<UserInput
    			userInput={this.userInput}
    			shiftKey={this.state.shiftKey}
    			encrypt={this.encrypt}
    			decrypt={this.decrypt}
    			bruteForce={this.bruteForce}
    		/>
    		<Dropdown options={options} onChange={this.onKeyChange} value={this._onSelect} placeholder="Select an shift number" />
    		<Message 
    			userMessage={this.state.userMessage}
    			encryptedMessage={this.state.encryptedMessage}
    			decryptedMessage={this.state.decryptedMessage}
    			shiftKey={this.state.shiftKey}
    		/>
    	</div>

    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));

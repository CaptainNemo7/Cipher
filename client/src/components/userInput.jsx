import React from 'react';
import ReactDOM from 'react-dom';
import { InputGroup, FormGroup, FormControl, Button} from 'react-bootstrap';

class UserInput extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			message: '',
			encryptedMessage: '',
		}
		this.changeMessageHandler = this.changeMessageHandler.bind(this)
		this.changeEncryptedMessageHandler = this.changeEncryptedMessageHandler.bind(this)
	}

	changeMessageHandler(e) {
		this.setState({
			message: e.target.value
		})
	}

	changeEncryptedMessageHandler(e) {
		this.setState({
			encryptedMessage: e.target.value
		})
	}

	onClickEncrypt() {
		
		this.props.userInput(this.state.message)
		this.props.encrypt(this.state.message, this.props.shiftKey)
		this.setState({
			encryptedMessage: this.props.encryptedMessage
		})
	}

	onClickDecrypt() {
		this.props.userInput(this.state.encryptedMessage)
		this.props.decrypt(this.state.encryptedMessage, this.props.shiftKey)
	}

	onClickBruteForce() {
		this.props.userInput(this.state.encryptedMessage)
		this.props.bruteForce(this.state.encryptedMessage)
	}

	render() {
		return (
			<div>
				<form>
					<FormGroup>
					<FormControl placeholder='enter message here'
						value={this.state.message}
						onChange={this.changeMessageHandler}
					/>
					</FormGroup>
				</form>
	    	<Button 
	    		onClick={()=> {this.onClickEncrypt()}}
	    		bsStyle='success'
	    		
	    		block
	    	>Encrypt</Button>
	    	<form>
					<FormGroup>
					<FormControl placeholder='enter encrypted message here'
						value={this.state.encryptedMessage}
						onChange={this.changeEncryptedMessageHandler}
					/>
					</FormGroup>
				</form>

	    	<Button
	    		onClick={() => {this.onClickDecrypt()}}
	    		bsStyle='warning'
	    		block
	    	>Decrypt</Button>
	    	<Button
	    		onClick={() => {this.onClickBruteForce()}}
	    		bsStyle='danger'
	    		block
	    	>Brute Force</Button>
			</div>
		)
	}
}

export default UserInput;
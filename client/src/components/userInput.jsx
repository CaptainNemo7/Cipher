import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col, InputGroup, FormGroup, FormControl, Button} from 'react-bootstrap';

class UserInput extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			message: '',
			cryptMessage: '',
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
			cryptMessage: e.target.value
		})
	}

	// handleChange(e, type) {
	// 	this.setState({
	// 		type: e.target.value
	// 	})
	// }

	onClickEncrypt() {
		
		this.props.userInput(this.state.message)
		this.props.encrypt(this.state.message, this.props.shiftKey)

	}

	onClickDecrypt() {
		this.props.userInput(this.props.encryptedMessage)
		this.props.decrypt(this.props.encryptedMessage, this.props.shiftKey)
	}

	onClickBruteForce() {
		this.props.userInput(this.props.encryptedMessage)
		this.props.bruteForce(this.props.encryptedMessage)
	}

	render() {
		return (
			<div>
			<Grid>
				<Row className="show-grid">
				<Col xs={6} md={6}>
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
	    	</Col>
	    	<Col xs={6} md={6}>
	    	<form>
					<FormGroup>
					<FormControl placeholder='enter encrypted message here'
						value={this.state.cryptMessage}
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
	    	</Col>
	    	</Row>
	    </Grid>
			</div>

		)
	}
}

export default UserInput;
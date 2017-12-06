import React from 'react';
import ReactDOM from 'react-dom';

class UserInput extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			message: ''
		}
		this.changeHandler = this.changeHandler.bind(this)
	}

	changeHandler(e) {
		this.setState({
			message: e.target.value
		})
	}

	onClickEncrypt() {
		
		this.props.userInput(this.state.message)
		this.props.encrypt(this.state.message, this.props.shiftKey)
	}

	onClickDecrypt() {
		
		this.props.userInput(this.state.message)
		this.props.decrypt(this.state.message, this.props.shiftKey)
	}

	render() {
		return (
			<div>
				<input placeholder='enter message here'
					value={this.state.message}
					onChange={this.changeHandler}
				/>
	    	<button 
	    		onClick={()=> {this.onClickEncrypt()}}
	    	>Encrypt</button>
	    	<button
	    		onClick={()=> {this.onClickDecrypt()}}
	    	>Decrypt</button>
	    	<button>Brute Force</button>
			</div>
		)
	}
}

export default UserInput;
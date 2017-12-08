import React from 'react';
import ReactDOM from 'react-dom';
import { InputGroup, FormGroup, FormControl, Button} from 'react-bootstrap';

const Message = (props) => {
	return (
		<div>
			<div>Encryption Key: {props.shiftKey}</div>
			<div>Encrypted Message: {props.encryptedMessage}</div>
			<div>Decrypted Message: {props.decryptedMessage}</div>
			<div>Brute Forced: {props.bruteForceMessage}</div>
			
		</div>

	)
}

export default Message;
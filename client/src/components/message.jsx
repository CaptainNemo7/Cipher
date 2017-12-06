import React from 'react';
import ReactDOM from 'react-dom';

const Message = (props) => {
	return (
		<div>
			<div>Encrypted Message: {props.encryptedMessage}</div>
			<div>Decrypted Message: {props.decryptedMessage}</div>
			<div>Encryption Key: {props.shiftKey}</div>
		</div>

	)
}

export default Message;
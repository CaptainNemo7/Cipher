import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col, InputGroup, FormGroup, FormControl, Button} from 'react-bootstrap';

const Message = (props) => {
	return (
		<div>
			<Grid id="messageGrid">
				<Row className="show-grid">
					<Col xs={6} md={6}>
						<div id="message">Encrypted Message: {props.encryptedMessage}</div>

					</Col>
					<Col xs={6} md={6}>
						<div id="message"> Decrypted Message: {props.decryptedMessage}</div>

					</Col>
	    	</Row>
	    </Grid>
	    <Grid >
				<Row className="show-grid">
					<Col xs={12} md={12}xsOffset={0}>
						<div id="message">Brute Forced: {props.bruteForceMessage}</div>
					</Col>
	    	</Row>
	    </Grid>
		</div>

	)
}

export default Message;
import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col, InputGroup, FormGroup, FormControl, Button} from 'react-bootstrap';

const Message = (props) => {
	return (
		<div>
			<Grid id="messageGrid">
				<Row className="show-grid">
					<Col xs={6} md={6}>
						<div id="message"><h4><b>Encrypted Message:</b></h4> {props.encryptedMessage}</div>

					</Col>
					<Col xs={6} md={6}>
						<div id="message"> <h4><b>Decrypted Message:</b></h4> {props.decryptedMessage}</div>

					</Col>
	    	</Row>
	    </Grid>
	    <Grid >
				<Row className="show-grid">
					<Col xs={12} md={12}xsOffset={0}>
					<div id="message"><h4><b>Brute Forced:</b></h4>
						{ props.bruteForceMessage.length > 0 ? 
							props.bruteForceMessage.map((item) => {
							return <div>{item}</div>
							})  : <div></div>
							
						}</div>
					</Col>
	    	</Row>
	    </Grid>
		</div>

	)
}

export default Message;
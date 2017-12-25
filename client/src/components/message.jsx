import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col, InputGroup, FormGroup, FormControl, Button} from 'react-bootstrap';

const Message = (props) => {
  return (
    <div>
      <Grid id="messageGrid">
        <Row className="show-grid">
          <Col xs={6} md={6}>
            <div id="message">
              <h3><b>Encrypted Message:</b></h3>
              <span className="messageLayout">{props.encryptedMessage}</span>
            </div>
          </Col>
          <Col xs={6} md={6}>
            <div id="message">
              <h3><b>Decrypted Message:</b></h3>
              <span className="messageLayout">{props.decryptedMessage}</span>
            </div>
          </Col>
        </Row>
      </Grid>
      <Grid >
        <Row className="show-grid">
          <Col xs={12} md={12}xsOffset={0}>
            <div className="bruteBox" id="message">
            <h3><b>Brute Forced:</b></h3>
            {props.bruteForceMessage.length > 0 ? 
              props.bruteForceMessage.map((item) => {
                return <div key={item}><span className="bruteMessageLayout">{item}</span></div>
            })  : <div></div>
            }
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default Message;
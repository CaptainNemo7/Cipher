import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Col, Row, MenuItem, DropdownButton, InputGroup, FormGroup, FormControl, Button} from 'react-bootstrap';

class ShiftKey extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			shiftKey:1,
		}
		this.shiftKeyRender = this.shiftKeyRender.bind(this);
	}

	shiftKeyRender() {
		let menuItems = [];
		for ( let i=1; i<=26; i++ ) {
			menuItems.push(<MenuItem 
											eventKey={i}
											key={i}>
											{i}</MenuItem>);
		}
		return menuItems;
	}
	render() {
		return (
			<div>
			<Grid id="messageGrid">
				<Row className="show-grid">
					<Col xs={6} md={6}>
					
						<DropdownButton 
							title="Key" 
							id="shiftKeySelector"
							class="dropdown-menu"
							onSelect={(e)=> {this.props.onKeyChange(e)}}
						>
			 				{this.shiftKeyRender().map((item) => {
			 					return item;
			 				})}
			    	</DropdownButton>
			    	<h3>Encryption Key: {this.props.shiftKey}</h3>
			    </Col>
	    	</Row>
	    </Grid>
    	
    	</div>
		)
	}
}

export default ShiftKey;

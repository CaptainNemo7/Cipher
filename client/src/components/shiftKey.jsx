import React from 'react';
import ReactDOM from 'react-dom';
import { MenuItem, DropdownButton, InputGroup, FormGroup, FormControl, Button} from 'react-bootstrap';

class ShiftKey extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			shiftKey:1,
		}
	}
	render() {
		return (

			<DropdownButton 
				title="Key" 
				id="shiftKeySelector"
				onSelect={(e)=> {this.props.onKeyChange(e)}}
			>
    		<MenuItem eventKey='1'>1</MenuItem>
    		<MenuItem eventKey='2'>2</MenuItem>
    		<MenuItem eventKey='3'>3</MenuItem>
    		<MenuItem eventKey='4'>4</MenuItem>
    		<MenuItem eventKey='5'>5</MenuItem>
    		<MenuItem eventKey='6'>6</MenuItem>
    		<MenuItem eventKey='7'>7</MenuItem>
    		<MenuItem eventKey='8'>8</MenuItem>
    		<MenuItem eventKey='9'>9</MenuItem>
    		<MenuItem eventKey='10'>10</MenuItem>
    		<MenuItem eventKey='11'>11</MenuItem>
    		<MenuItem eventKey='12'>12</MenuItem>
    		<MenuItem eventKey='13'>13</MenuItem>
    		<MenuItem eventKey='14'>14</MenuItem>
    		<MenuItem eventKey='15'>15</MenuItem>
    		<MenuItem eventKey='16'>16</MenuItem>
    		<MenuItem eventKey='17'>17</MenuItem>
    		<MenuItem eventKey='18'>18</MenuItem>
    		<MenuItem eventKey='19'>19</MenuItem>
    		<MenuItem eventKey='20'>20</MenuItem>
    		<MenuItem eventKey='21'>21</MenuItem>
    		<MenuItem eventKey='22'>22</MenuItem>
    		<MenuItem eventKey='23'>23</MenuItem>
    		<MenuItem eventKey='24'>24</MenuItem>
    		<MenuItem eventKey='25'>25</MenuItem>
    		<MenuItem eventKey='26'>26</MenuItem>
    	</DropdownButton>

		)
	}
}

export default ShiftKey;
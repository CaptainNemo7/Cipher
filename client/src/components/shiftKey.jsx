import React from 'react';
import ReactDOM from 'react-dom';
import { MenuItem, DropdownButton, InputGroup, FormGroup, FormControl, Button} from 'react-bootstrap';

class ShiftKey extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			shiftKey: 1,
		}
	}
	render() {
		return (

			<DropdownButton>
    		<MenuItem eventKey='1'>1</MenuItem>
    		<MenuItem eventKey='1'>2</MenuItem>
    		<MenuItem eventKey='1'>3</MenuItem>
    		<MenuItem eventKey='1'>4</MenuItem>
    		<MenuItem eventKey='1'>5</MenuItem>
    		<MenuItem eventKey='1'>6</MenuItem>
    		<MenuItem eventKey='1'>7</MenuItem>
    		<MenuItem eventKey='1'>8</MenuItem>
    		<MenuItem eventKey='1'>9</MenuItem>
    		<MenuItem eventKey='1'>10</MenuItem>
    		<MenuItem eventKey='1'>11</MenuItem>
    		<MenuItem eventKey='1'>12</MenuItem>
    		<MenuItem eventKey='1'>13</MenuItem>
    		<MenuItem eventKey='1'>14</MenuItem>
    		<MenuItem eventKey='1'>15</MenuItem>
    		<MenuItem eventKey='1'>16</MenuItem>
    		<MenuItem eventKey='1'>17</MenuItem>
    		<MenuItem eventKey='1'>18</MenuItem>
    		<MenuItem eventKey='1'>19</MenuItem>
    		<MenuItem eventKey='1'>20</MenuItem>
    		<MenuItem eventKey='1'>21</MenuItem>
    		<MenuItem eventKey='1'>22</MenuItem>
    		<MenuItem eventKey='1'>23</MenuItem>
    		<MenuItem eventKey='1'>24</MenuItem>
    		<MenuItem eventKey='1'>25</MenuItem>
    		<MenuItem eventKey='1'>26</MenuItem>
    	</DropdownButton>

		)
	}
}

export default ShiftKey;
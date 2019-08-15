import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
class Counter extends Component {
	state = {
		count: 0,
		imageUrl: 'https://picsum.photos/200'
	};

	render() {
		return (
			<React.Fragment>
				<span className="test">{this.formatCount()}</span>
				<Button color="primary" variant="contained">
					Increment
				</Button>
			</React.Fragment>
		);
	}

	formatCount() {
		const { count } = this.state;
		return count === 0 ? <h1> Zero </h1> : count;
	}
}

export default Counter;

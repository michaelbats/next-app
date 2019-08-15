import Counter from '../components/counter';
import styles from './styles.scss';
import axios from 'axios';
import React, { Component } from 'react';
import http from '../services/http.service';

class App extends Component {
	componentDidMount() {
		// 	const promise = axios.get('https://jsonplaceholder.typicode.com/posts');
		const promise = fetch('https://jsonplaceholder.typicode.com/posts');

		promise
			.then(response => response.json())
			.then(data => {
				console.log(data);
			});

		promise.then(d => {
			console.log(d);
		});
	}

	render() {
		return (
			<div>
				<Counter />
			</div>
		);
	}
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const myFunc = function(token) {
	console.log(token);
	const url = `https://api.meetup.com/pro/gdg/groups/?zip=11216&radius=10&access_token=${token}`;

	fetch(url, {
		method: 'GET',
		mode: 'cors',
	})
		.then(function(response) {
			console.log('this is my response: ', response);
			return response.json();
		})
		.then(function(myJson) {
			console.log(JSON.stringify(myJson));
		})
		.catch(() =>
			console.log('Can’t access ' + url + ' response. Blocked by browser?')
		);
};

class App extends Component {
	render() {
		const token = window.location.hash
			? window.location.hash.match(/#access_token=([a-z0-9]*)/)[1]
			: '';
		return (
			<div className="App">
				<header className="App-header">
					{token.length ? (
						myFunc(token)
					) : (
						<div>
							<img src={logo} className="App-logo" alt="logo" />
							<p>
								Edit <code>src/App.js</code> and save to reload.
							</p>
							<a
								className="App-link"
								href="https://secure.meetup.com/oauth2/authorize?client_id=tdg6drsop9c4s51h8qdvl5998q&response_type=token&redirect_uri=https://meetup-oauth-sample.herokuapp.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								OAuth
							</a>
						</div>
					)}
				</header>
			</div>
		);
	}
}

export default App;

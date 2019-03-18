import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		const token = window.location.href.slice(56, 88);
		return (
			<div className="App">
				<header className="App-header">
					{token.length ? (
						fetch(
							`https://api.meetup.com/pro/gdg/groups/?zip=11216&radius=10&access_token=${token}`
						)
							.then(function(response) {
								return response.json();
							})
							.then(function(myJson) {
								console.log(JSON.stringify(myJson));
							})
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

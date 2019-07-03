import React from 'react';
import logo from './logo.svg';
import './App.css';

import Titles from "./components/Titles";

class App extends React.Component {

	render(){
	
		return(
			<div> 
			<p> This is a test </p>
			<h2> Titles component </h2>
			<Titles />
			<h2> Titles component </h2>
			
			
			
			</div>
		
		);
	
	}



};

export default App;

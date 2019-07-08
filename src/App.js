import React from 'react';
import logo from './logo.svg';
import './App.css';

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";


class App extends React.Component {


	getWeather() =  async (e) => {
			
		e.preventDefault()
		const api_call = await fetch(`${API_KEY}`);
	
		const data = await api_call.json();
		console.log(data);


	}




	render(){
	
		return(
			<div> 
			<p> This is a test </p>
			<h2> Titles component </h2>
			<Titles />
			<Form getWeather={this.getWeather}/>
			<Weather /> 
			<h1></h1>
			<h2></h2>

			<h1> Hello <h1>
			<h2> Hey </h2>
			<h1> Hey </h1>
			
			
			</div>
		
		);
	
	}



};

export default App;

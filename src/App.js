import React from 'react';
import logo from './logo.svg';
import './App.css';

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";


class App extends React.Component {

	render(){
	
		return(
			<div> 
			
			<Titles />
			<Form />
			<Weather />
			
			
			
			</div>
		
		);
	
	}



};

export default App;

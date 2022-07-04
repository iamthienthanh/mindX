import { useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Docs from './components/Docs';


function App() {
	
  return (
	<BrowserRouter>
		<Header />
		<Routes>
			<Route path="/Home" element={<Home />} />
			<Route path="/About" element={<About />} />
			<Route path="/Docs" element={<Docs />} />


			
		</Routes>
	</BrowserRouter>
  )
}
export default App;

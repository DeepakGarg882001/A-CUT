import React from 'react'
import "./css/NavBar.css";
const NavBar = () => {
	return (
		<>
			<nav>
				<ul className="menu">
					<li className="logo" id ="pic"> <img src="./img.jpg" alt="loading" />  </li>
				
					<li className="item"id ="home"><a href="./Home">Home</a></li>
					<li className="item"id ="about"><a href="./Home">About</a></li>
					<li className="item"id ="services"><a href="./Home">Services</a></li>
					<li className="item"id ="contact"><a href="./Home">Contact </a></li>
					<li className="item button"id ="log"><a href="./Home">Log In</a></li>
					<li className="item button "id ="sign"><a href="./Home">Sign Up</a></li>
		
					
				</ul>
			</nav>
		</>
	)
}

export default NavBar
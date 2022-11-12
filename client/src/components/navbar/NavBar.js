import React from 'react'
import "../../styles/navbar.css";
const NavBar = () => {
	return (
		<>
			<nav>
				<div className="logo"><h3>Logo</h3></div>
				<ul className="menu">
					<li className="item"id ="home"><a href="./#">Home</a></li>
					<li className="item"id ="about"><a href="./about">About</a></li>
					<li className="item"id ="services"><a href="./services">Services</a></li>
					{/* <li className="item"id ="contact"><a href="./contact">Contact </a></li> */}
					<li className="item button"id ="log"><a href="./login">Log In</a></li>
					<li className="item button "id ="sign"><a href="./signup">Sign Up</a></li>
				</ul>
			</nav>
		</>
	)
}

export default NavBar
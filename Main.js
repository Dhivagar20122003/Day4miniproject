import React from 'react';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './Main.css';
import  './Style.css';
import { Link } from 'react-router-dom';
const Main = () => {
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
  return (
    <>
    
    <header>
       
			<h3>LOGO</h3>
			<nav ref={navRef}>
            <a href="/#">Logo</a>
				<a href="/#">Flights</a>
				<a href="/#">Hotels</a>
				<a href="/#">Offers</a>
				<a href="/#">Apartments</a>
        <a href="/#">Activities</a>
        <a href="/#">Contacts</a>
        <div className='Boys'>
        <Link to="Login"><a href="/#">Sign In</a></Link>
        <Link to="Register"><a href="/#">Create Account</a></Link>
        </div>
        
				{/* <button
					className="nav1"
					onClick={showNavbar}>
					<FaTimes />
				</button> */}
			</nav>
			<button
				className="nav2"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
     <div className='main'>
        <div className='h1'>
        <h1>Find Hotels in India</h1>
        <h3>One Step close to Paradise</h3>
        </div>
        <div classname="glassmorphism">
    <div className="search">
      <input type="text" placeholder="Location" className="search-field" />
      <input type="date" className="search-field" />
      <input type="date" className="search-field" />
      <input type="number" placeholder="Room" className="search-field" />
      <button className="search-button">Search</button>
    </div>
    </div>
    </div>
    </>
  );
};

export default Main;
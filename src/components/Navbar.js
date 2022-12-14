import React from 'react';
import logo from '../images/Logo_black.png'
import '../styles/themify-icons.css'

function NavigationBar() {
  return (
    <div className='container'>
        <div className='nav_bar'>

        <img src={logo} className=""/>

        <ul className='nav-items'>
            <li className='active'>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Reviews</li>
            <li>Contact</li>
        </ul>
        <button className='button-item'><span class="ti-shopping-cart-full"></span>Get now</button>
        </div>
    </div>
  );
}

export default NavigationBar;
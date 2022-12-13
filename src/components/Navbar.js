import React from 'react';
import logo from '../images/Logo_black.png'

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

        <button className='button-item'>Get now</button>
        </div>
    </div>
  );
}

export default NavigationBar;
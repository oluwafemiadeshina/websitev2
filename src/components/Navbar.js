import React from 'react';
import logo from '../images/Logo_black.png'
import '../styles/themify-icons.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch, faClose} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'

const showNav = () => {
  // alert('Clicked');

document.querySelector('.close-menu-icon').setAttribute('style', 'display:block !important');
document.querySelector('.menu-icon').style.visibility = "hidden"
document.querySelector('.mobile-nav').setAttribute('style', 'display: block !important');
  
}
const CloseNav = () => {
  document.querySelector('.close-menu-icon').style.visibility = "hidden"
  document.querySelector('.menu-icon').setAttribute('style', 'display:block !important');
  document.querySelector('.mobile-nav').setAttribute('style', 'display: none !important');

  let x = window.matchMedia("(max-width: 992px)")
  if(x.matches){
    return null;
  }else{
    document.querySelector('.mobile-nav').setAttribute('style', 'display: none !important');
  }
}



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
        <div className='parent-nav'>
            <div class="menu-icon" onClick={showNav}>
                  <FontAwesomeIcon icon={faBars} />
            </div>
            <div class="close-menu-icon" onClick={CloseNav}>
                  <FontAwesomeIcon icon={faClose} />
            </div>
        </div>
        </div>
        {/* Mobile navigation Content */}
        <div className='mobile-nav' id='mobile-nav'>
          <div className='mobile-nav-content'>

            <div> Home </div>
            <hr className='divider'/>
            <div> About </div>
            <hr className='divider'/>
            <div> Services </div>
            <hr className='divider'/>
            <div> Reviews </div>
            <hr className='divider'/>
            <div> Contact </div>


          <button className='button-item-nav mt-4'><span class="ti-shopping-cart-full"></span>Get now</button>
          <div className='search my-5'>
            <input placeholder='Search here..'/>
            <FontAwesomeIcon icon={faSearch} />
          </div>
          
          </div>
          <div className='row mobile-socails text-center'>
            <div className='col-md-4 col border-top p-4'>
              <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div className='col-md-4 col border-start border-top border-end p-4'>
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className='col-md-4 col border-top p-4'>
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
        </div>
    </div>
  );
}

export default NavigationBar;
import React from 'react';
import hero_img from '../images/hero_img.png'
import '../styles/themify-icons.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'


function HeroSection() {
  return (
    <section>

<div className='container-fluid hero-section'>
        <div className='container'>
            <div className='row d-flex align-items-center mt-5'>
                <div className='col-md-6 mt-3'>
                    <div>
                        <p className='tip-text'>Everything at your fingertips</p>
                        <h2 className='heading-text'>Perfect App for more than just fun</h2>
                        <p className='body-text'>Aliquam fringilla elementum varius. Nunc lobortis nisl in nibh commodo, quis placerat nisi feugiat fringilla.</p>
                    </div>
                    <div className='cta-btn'>
                        <div className=''>
                            <button className='cta-button'>
                                <FontAwesomeIcon icon={faPlay} />
                            </button>
                        </div>
                        <div className=''>
                            <h4 className='cta-text'>Find your song</h4>
                            <p className='cta-body'>Lorem ipsum dolor sit amet, consectetur</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <img src={hero_img} className="hero-image w-100" />
                </div>
            </div>
        </div>
    </div>
    </section>
  );
}

export default HeroSection;
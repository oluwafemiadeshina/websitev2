import React from 'react';
import about_video from '../images/about_video.png'
import logo from '../images/Logo_black.png'
import endlessmusic from '../images/endless–music.png'
import designed4more from '../images/designed4more.jpeg'
import '../styles/themify-icons.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faLinkedinIn, faTwitter, faFacebook} from '@fortawesome/free-brands-svg-icons'
import { faPlay, faStar } from '@fortawesome/free-solid-svg-icons'

function About() {
  return (
    <section>

<div className='my-5'>
        <div className=''>
            <div className='container text-center'>
                <p className='tip-text'>START YOUR DAY WITH A TUNE</p>
                <h2 className='heading-text'>Powerful way to enjoy your life</h2>
                <p className='body-text-2 my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at lacus at augue aliquet posuere. Aliquam fringilla elementum varius. Nunc lobortis nisl in nibh commodo, quis placerat nisi feugiat.</p>

                <div className='text-center my-5'>
                    <button type="button" className='AppStore_btn'>
                        <FontAwesomeIcon icon={faApple} />
                        &nbsp;AppStore
                    </button>
                    <button type="button" className='PlayStore_btn'>
                    <span class="ti-android"></span>
                        &nbsp;PlayStore</button>
                </div>
            </div>
            <div  className='container video-section my-5'>
                <button type="button" className='play_btn'>
                    <FontAwesomeIcon icon={faPlay} />
                </button>
                <img src={about_video} className='w-100'/>
            </div>
            <section className='container' >
                <p className='text-center tip-text'>TO COMPLIMENT YOUR IDEAS</p>
                <h2 className='text-center'>Even more reasons to love</h2>
                <div className='row'>
                    <div className='col-md-4 my-5 p-5 ideas-icon'>
                        <span className='ti-zoom-in'></span>
                        <h3>01. Advanced search</h3>
                        <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam at lacus</p>
                    </div>
                    <div className='col-md-4 my-5 p-5 ideas-icon border-start border-end'> <span className='ti-ruler-pencil'></span>
                        <h3>02. Custamizable</h3>
                        <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam at lacus</p>
                    </div>
                    <div className='col-md-4 my-5 p-5 ideas-icon'> <span className='ti-paint-bucket'></span>
                        <h3>03. Intuitive design</h3>
                        <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam at lacus</p>
                    </div>

                </div>
            </section>

            <section className='container-fluid newsletter text-center my-5 py-5'>
                <h1 className='numbers'>20k</h1>
                <h2 className='newsletter-heading'>Our loyal and satisfied customers all over the globe has joined</h2>
                <div className='my-4'>
                    <input name='email' className='newsletter-input' type="email" placeholder='Please enter your email here...'/>
                    <button className='newsletter-heading_btn'>Join us today</button>
                </div>
                <p className='newsletter-text'>Subbscribe to our newsletter and receive latest updates</p>
            </section>

            <section>
                <div className='container my-5 py-5'>
                    <div className='row d-flex align-items-center'>
                        <div className='col-md-6'>
                            <img src={endlessmusic}  className='w-100' />
                        </div>
                        <div className='col-md-6'>
                            <span className='icon-img'>
                                <span className='ti-ink-pen'></span>
                            </span>
                            <h2 className='heading my-4'>Endless music library for perfect afternoon</h2>
                            <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at lacus at augue aliquet posuere. Aliquam fringilla elementum varius. Nunc lobortis.</p>
                            <button className='btn_outline mt-4'>See more</button>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container even_more  my-5 py-5'>
                    <div className='row  d-flex align-items-center'>
                        <div className='col-md-6 px-5'>
                            <p className='tip-text'>EVEN MORE TO LOVE</p>
                            <h2 className='heading' >Designed for all devices</h2>
                            <p className='paragraph'><strong >Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nam at lacus at augue aliquet posuere. Aliquam fringilla elementum varius. Nunc lobortis</p>
                            <hr className='divider'/>
                            <div className='d-flex align-items-center'>
                                <div className='icon-image mb-3'>
                                    <span className='ti-unlink'></span></div>
                                <p className='ps-3 w-50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <div className='icon-image'>
                                    <span className='ti-microphone'></span></div>
                                <p className='ps-3 w-50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <img src={designed4more} className='w-75'/>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container-fluid bg-light p-5 my-5 text-center'>
                    <p className='tip-text'>OUR CLIENTS</p>
                    <h1 className='review'>Reviews</h1>
                    <div className='row px-5 cards'>
                        <div className='col-md-4 p-5 card'>
                            <h3>Intuitive design</h3>
                            <div className='star'>
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at lacus at augue aliquet posuere. Aliquam fringilla</p>
                            <p><strong>Elizabeth Lark</strong></p>
                        </div>
                        <div className='col-md-4 p-5 card'>
                            <h3>Intuitive design</h3>
                                                        <div className='star'>
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at lacus at augue aliquet posuere. Aliquam fringilla</p>
                            <p><strong>Elizabeth Lark</strong></p>
                        </div>
                        <div className='col-md-4 p-5 card'>
                            <h3>Intuitive design</h3>
                                                        <div className='star'>
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at lacus at augue aliquet posuere. Aliquam fringilla</p>
                            <p><strong>Elizabeth Lark</strong></p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className='my-3 container'>
                <footer className='row mt-5'>
                    <div className='col-md-4'>
                        <div className=''>
                            <img src={logo} className='mb-4'/>
                            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at</p>
                            <div className='d-flex social_icons'>
                                <FontAwesomeIcon icon={faLinkedinIn} />
                                <FontAwesomeIcon icon={faTwitter} />
                                <FontAwesomeIcon icon={faFacebook} />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-8 ps-5 mt-5'>
                        <div className='row'>
                            <div className='col-md-4 col'>
                                <div className='footer-heading'><h2>Explore</h2></div>
                                <div className='footer-items'><h2>Cookies</h2></div>
                                <div className='footer-items'><h2>About</h2></div>
                                <div className='footer-items'><h2>Privacy Policy</h2></div>
                                <div className='footer-items'><h2>Licenses</h2></div>
                            </div>
                            <div className='col-md-4 col'>
                                <div className='footer-heading'><h2>Marketing</h2></div>
                                <div  className='footer-items'><h2>Timeline</h2></div>
                                <div  className='footer-items'><h2>News</h2></div>
                                <div  className='footer-items'><h2>Insight</h2></div>
                                <div  className='footer-items'><h2>Licensing</h2></div>
                            </div>
                            <div className='col-md-4 col'>
                                <div className='footer-heading'><h2>Categories</h2></div>
                                <div  className='footer-items'><h2>About</h2></div>
                                <div  className='footer-items'><h2>Strategy</h2></div>
                                <div  className='footer-items'><h2>Terms & conditions</h2></div>
                                <div  className='footer-items'><h2>Services</h2></div>
                            </div>
                        </div>

                    </div>
                    <hr className='divider my-5'/>
                    <div  className='d-flex justify-content-between'>
                        <p className='copyright'>Copyright 2022 Shufflehoun. All rights reserved.</p>
                        <div>
                        <ul  className='d-flex footer-nav'>
                            <li className='active'>Home</li>
                            <li >About</li>
                            <li>Services</li>
                            <li>Reviews</li>
                            <li>Contact</li>
                        </ul>
                        </div>
                    </div>
                </footer>
            </section>

        </div>
    </div>
    </section>
  );
}

export default About;
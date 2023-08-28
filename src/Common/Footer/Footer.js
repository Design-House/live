import React from 'react';
import './Footer.css';
import wns from '../../images/Footer/logowhite.svg';
import { Link} from 'react-router-dom';


const Footer = () => {
  return (
    <footer id="footer-Wrap" className="pt-4 pb-3 text-center">
            <div className="container">
            <div className="footer-top mb-5">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="footer-contact text-md-start" >
                                <h2>Let’s talk.</h2>
                                <a href="mailto: designhouse@vuram.com">designhouse@vuram.com</a>
                                
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="footer-logo text-md-end"  >
                            <a href=""> <img src={wns} alt="" title="" className='dhlogo' /> </a>
                            </div>
                        </div>
                    </div>

                </div>
                
                
                <div className="footer-bottom">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="footer-info text-md-start">
                                <p className="mb-1">Do not sell my personal information.</p>
                                <p>© 2023 WNS VURAM</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="footer-link text-md-end ">
                                <Link to="/about" className='links'>About</Link>
                                <Link to="/services" className='links'>Services</Link>
                                <Link to="/works" className='links'>Works</Link>
                                <Link to="/blog" className='links'>Blog</Link>
                                <Link to="/contact" className='links'>Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer
import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className='bg-dark'>
            <Container>
                <div className='d-flex text-light pt-5 pe-5 pb-5'>
                    <div className='pe-5'>
                        <h2>About Me</h2>
                        <div className='pt-3'>
                            <h3>Name: Rashed</h3>
                        </div>
                    </div>
                    <div className='px-3'>
                        <h2>Contact Info</h2>
                        <div className='pt-3'>
                            <h4>Phone: 01303-401961</h4>
                            <h4><FontAwesomeIcon icon={faWhatsapp} /> 01303-401961</h4>
                            <h4>Email: banglayielts@gmail.com</h4>
                            <span><FontAwesomeIcon icon={faMapMarkerAlt} /> Bijoy 71 Hall, University of Dhaka 1000 Dhaka, Dhaka Division, Bangladesh</span>
                        </div>
                    </div>
                    <div className='px-3'>
                        <h2>Social Media</h2>
                        <div className='pt-3'>
                            <a className='text-light social-icon fb' href="https://www.facebook.com/BanglayIELTS"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a className='text-light social-icon insta' href="https://www.instagram.com/logic.guru/"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a className='text-light social-icon yt' href="https://youtube.com/banglayielts"><FontAwesomeIcon icon={faYoutube} /></a>
                        </div>

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
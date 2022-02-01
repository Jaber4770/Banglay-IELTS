import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className='bg-dark'>
            <Container>
                {/* About Instructor. He is not published details about his that's why i can't add more thing about his. */}
                <div className='d-flex text-light pt-5 pe-5 pb-4'>
                    <div className='pe-5'>
                        <h2>About Me</h2>
                        <div>
                            <p className='fs-5 mb-3'>Name: Rashed Bin Ibrahim</p>
                            <a className='text-light social-icon fb' href="https://www.facebook.com/RashedVaiIELTS"><FontAwesomeIcon icon={faFacebook} /></a>
                        </div>
                    </div>
                    {/* Contact info with font awesome icon */}
                    <div className='px-3'>
                        <h2>Contact Info</h2>
                        <div className='pt-3'>
                            <h4>Phone: 01303-401961</h4>
                            <h4><FontAwesomeIcon icon={faWhatsapp} /> 01303-401961</h4>
                            <h4>Email: banglayielts@gmail.com</h4>
                            <span><FontAwesomeIcon icon={faMapMarkerAlt} /> Bijoy 71 Hall, University of Dhaka 1000 Dhaka, Dhaka Division, Bangladesh</span>
                        </div>
                    </div>
                    {/* Social Media icon */}
                    <div className='px-3'>
                        <h2>Social Media</h2>
                        <div className='pt-3'>
                            <a className='text-light social-icon fb' href="https://www.facebook.com/BanglayIELTS"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a className='text-light social-icon insta' href="https://www.instagram.com/logic.guru/"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a className='text-light social-icon yt' href="https://youtube.com/banglayielts"><FontAwesomeIcon icon={faYoutube} /></a>
                        </div>

                    </div>
                </div>
                <div>
                    {/* CopyRight section */}
                    <h5 className='text-center text-light pb-3'>Copyright &copy; 2022 Banglay-IELTS.com</h5>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
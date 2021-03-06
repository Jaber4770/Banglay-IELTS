import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import img from '../../images/Banglay-IELTS-Profile.jpg'
import './header.css'
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, LogOut } = useAuth();
    return (
        <div>

            {/* header top info */}

            <div className='bg-dark'>
                <Container className='p-2 text-light'>
                    <span className='px-2'><FontAwesomeIcon icon={faPhone} /> 01303-401961</span>
                    <span className='px-2'><FontAwesomeIcon icon={faEnvelope} /> banglayielts@gmail.com</span>
                    <span className='px-2 pe-5'><FontAwesomeIcon icon={faMapMarkerAlt} /> Bijoy 71 Hall, University of Dhaka 1000 Dhaka, Dhaka Division, Bangladesh</span>
                    <a className='text-light social-icon fb' href="https://www.facebook.com/BanglayIELTS"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a className='text-light social-icon insta' href="https://www.instagram.com/logic.guru/"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a className='text-light social-icon yt' href="https://youtube.com/banglayielts"><FontAwesomeIcon icon={faYoutube} /></a>
                </Container>
            </div>

            {/* Below Navbar */}

            <Navbar bg="white" variant="primary">
                <Container>
                    <Navbar.Brand><Link to="/home" className=' nav-brand'>
                        <img src={img} alt="" width="60" height="60" />Banglay IELTS
                    </Link></Navbar.Brand>
                    <Nav className="me-auto nav-item">
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/about">About us</NavLink>
                        <NavLink to="/contact">Contact us</NavLink>
                        <NavLink to="/review">Review</NavLink>
                        <NavLink to="/faq">FAQ</NavLink>
                        {
                            user.email ?
                                <div className='d-flex'>
                                    <p className='margin-left'>{user.displayName}</p>
                                    <button className='out-btn' onClick={LogOut}>Log Out</button>
                                </div>
                                :
                                <div className='d-flex ms-5'>
                                    <NavLink className='in-btn' to="/login">Log in</NavLink>
                                    <NavLink className='in-btn' to="/signup">Signup</NavLink>
                                </div>
                        }
                    </Nav>
                </Container>
            </Navbar>
            <div>
            </div>
        </div>
    );
};

export default Header;
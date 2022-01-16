import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/faq">FAQ</NavLink>
            </nav>
        </div>
    );
};

export default Header;
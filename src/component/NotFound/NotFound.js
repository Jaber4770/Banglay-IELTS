import React from 'react';
import { Container } from 'react-bootstrap';
import img from '../../images/404-Image.jpg'
const NotFound = () => {
    return (
        <div>
            <Container>
                {/* This is 404 page where i add one image and one line text */}
                <div className='text-center p-5'>
                    <img src={img} alt="" />
                    <h2>This page is not found!</h2>
                </div>
            </Container>
        </div>
    );
};

export default NotFound;
import React from 'react';
import { Container } from 'react-bootstrap';
import "./About.css"

const About = () => {
    return (
        <div className='bg-color'>
            <Container>
                <div className='p-3'>
                    <h3>About Me</h3>
                    <p>This is Rashed. Founder of "Banglay IELTS". I studied from University of Dhaka. Currently I'am teaching as an IELTS instructor on online.
                        Thank you for reading about me!
                    </p>
                </div>
            </Container>
        </div>
    );
};

export default About;
import React from 'react';
import { Container } from 'react-bootstrap';
import img from '../../images/Contact.jpg'
import './Contact.css'

const Contact = () => {

    // This is Contact component. here i explain not to disturb Instructor. Every info are set header top and footer that's why i did't set here contact info agin.

    return (
        <div>
            <Container>
                <div>
                    <div className='p-3 mt-3 about-bg-color'>
                        <h4>Hello viewers,</h4>
                        <p>If you want to talk with me,  Please <b>don't call me</b> on <b>WhatsApp</b>. Send me <b>text only</b>. I will reply you soon.</p>
                    </div>
                    <div className='img-fluid covered text-center'>
                        <img src={img} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Contact;
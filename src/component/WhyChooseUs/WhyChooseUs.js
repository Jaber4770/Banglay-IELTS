import React from 'react';
import { Container } from 'react-bootstrap';
import img from '../../images/batch.jpg'
import './WhyChooseUs.css'

const WhyChooseUs = () => {
    return (
        <Container >
            <div>
                <h2 className='text-center p-4 why-chs-bg'>Why Choose Us?</h2>
                <div className='d-flex pb-5'>
                    <div className='w-50 pt-5 mt-2 me-4'>
                        <h3 className='ielts-result'>আপনার স্কোরের গ্যারান্টি দিতে পারবো না, তবে IELTS এর ভয়ডর দূর করে দিবো।
                            No worries, <b>InSha'Allah</b> valo kicu paben 😊</h3>
                        <p className='fs-4'>☆ Per Week 5 classes = 3 main classes + 1 Solve Class + 1 Free live class (every Friday night with a lot of unknown bhai brothers 😊)</p>
                        <p className='fs-4'>☆ Target Band at least CLB 7 😊</p>
                        <p className='fs-4'>☆ SEATS are Limited
                            Pay and confirm your seat.
                            <span className='fs-3'>Bkash personal  01871298287</span>
                        </p>
                        <p className='fs-3'>☆ Always Open!😊</p>
                    </div>
                    <div className='w-50'>
                        <img className='img-fluid w-100' src={img} alt="" />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default WhyChooseUs;
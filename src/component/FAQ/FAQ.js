import React from 'react';
import { Container } from 'react-bootstrap';
import './FAQ.css'
import img from '../../images/FAQ.jpg'

const FAQ = () => {
    return (
        <div className='pb-3'>
            <Container>
                <div className='pt-3 pb-5 text-center'>
                    <h3 className='bg-color py-4'>Frequently Asked Question.</h3>
                </div>
                <div className='d-flex'>
                    <div className='w-50'>
                        <div>
                            <h5>1. "আপনার প্রাইভেট ব্যাচে কিভাবে Join করা যায়?"</h5>
                            <p className="ps-4">First you have to pay the couse fee and then send me the last 4 digit of the bkash number which number you used to pay the fee. Then you are the student of my Batch and I will provide you class schedule and ZOOM id and password to join in class.</p>
                        </div>
                        <div>
                            <h5>2. "আপনাদের কোন Facebook Group অথবা Facebook Page আছে?"</h5>
                            <p className="ps-4">☆ Yes! We have a Facebook Page you can search and you will get it.
                            </p>
                            <p className="ps-4">☆ We use Facebook group for my batch. Every Batch has a private facebook group for studens to post their problem and to share free resource to develope themself.</p>
                        </div>
                        <div>
                            <h5>3. "আপনাদের IELTS General Training নিয়ে কোন ব্যাচ আছে?"</h5>
                            <p className="ps-4">Yes! We have IELTS General Training Batch. You can join.</p>
                        </div>
                        <div>
                            <h5>4. "দয়া করে আপনাদের YouTube Channel এর Link টা দেন।"</h5>
                            <p className="ps-4"><a className='faq-yt-link' href="https://www.youtube.com/c/BanglayIELTS">Click here</a> to go my Youtube Channel</p>
                        </div>
                    </div>
                    <div className='w-50'>
                        <img className='img-fluid w-100' src={img} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default FAQ;
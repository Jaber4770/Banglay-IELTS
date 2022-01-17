import React from 'react';
import { Container } from 'react-bootstrap';
import './FAQ.css'

const FAQ = () => {
    return (
        <div className='bg-color'>
            <Container>
                <div className='pt-3 pb-5 text-center'>
                    <h3>Frequently Asked Question.</h3>
                </div>
                <div>
                    <div>
                        <h5>"আপনার প্রাইভেট ব্যাচে কিভাবে Join করা যায়?"</h5>
                        <p>First you have to pay the couse fee and then send me the last 4 digit of the bkash number which number you used to pay the fee. Then you are the student of my Batch and I will provide you class schedule and ZOOM id and password to join in class.</p>
                    </div>
                    <div>
                        <h5>"আপনাদের কোন Facebook Group অথবা Facebook Page আছে?"</h5>
                        <p>Yes! We have a Facebook Page you can search and you will get it.
                        </p>
                        <p>We use Facebook group for my batch. Every Batch has a private facebook group for studens to post their problem and to share free resource to develope themself.</p>
                    </div>
                    <div>
                        <h5>"আপনাদের IELTS General Training নিয়ে কোন ব্যাচ আছে?"</h5>
                        <p>Yes! We have IELTS General Training Batch. You can join.</p>
                    </div>
                    <div>
                        <h5>"দয়া করে আপনাদের YouTube Channel এর Link টা দেন।"</h5>
                        <p><a className='faq-yt-link' href="https://www.youtube.com/c/BanglayIELTS">Click here</a> to go my Youtube Channel</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default FAQ;
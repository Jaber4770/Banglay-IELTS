import React from 'react';
import { Container } from 'react-bootstrap';

const MyQuote = () => {
    return (
        <Container>
            {/* This is Instructor quote. */}
            <div className='px-4 pt-5 pb-5'>
                <blockquote>
                    <h3>
                        <q>আমি মনে করি যে Higher Studies এর স্বপ্ন প্রতিটি মানুষের অধিকার🧡Unfortunately, IELTS has become a BUSINESS in BD. I am here to HELP you with high-quality teaching for FREE.</q>
                    </h3>
                </blockquote>
                <h3>-Rashed</h3>
            </div>
        </Container>
    );
};

export default MyQuote;
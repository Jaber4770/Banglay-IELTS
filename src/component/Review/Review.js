import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ReviewCard from '../ReviewCard/ReviewCard';

const Review = () => {
    // getting data from reviewData.json file which situated in public folder
    const [reviews, setReview] = useState([]);

    useEffect(() => {
        fetch('./reviewData.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, []);
    // get data from json file and converted it in js and set it to setReview


    return (
        <div>
            <h2 className='text-center why-chs-bg p-3'>Students Review</h2>
            <Container>
                {/* sending data using map to ReviewCard */}
                <div className='mt-5 '>
                    <Row xs={1} md={2} lg={4} >
                        {
                            reviews.map(review => <ReviewCard
                                review={review}
                                key={review.id}>
                            </ReviewCard>)
                        }
                    </Row>
                </div>
                {/* I tried to load image from facebook and to show here but unfotunately there was and error it was taking time but i have very short time to finish my course for ACC that's why i skip it. i will fix it latter.  */}
                <h3 className='text-center fs-3 p-3'>More Review are comming soon!</h3>
                <p className='fs-3 ielts-result'>Note: Photos are not comming from facebook link. I will fix it latter with daynamic system.</p>
            </Container>
        </div>
    );
};

export default Review;
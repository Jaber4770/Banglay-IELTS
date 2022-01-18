import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ReviewCard from '../ReviewCard/ReviewCard';

const Review = () => {
    const [reviews, setReview] = useState([]);

    useEffect(() => {
        fetch('./reviewData.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, []);


    return (
        <div>
            <h2 className='text-center why-chs-bg p-3'>Students Review</h2>
            <Container>
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
                <h3 className='text-center fs-3 p-3'>More Review are comming soon!</h3>
            </Container>
        </div>
    );
};

export default Review;
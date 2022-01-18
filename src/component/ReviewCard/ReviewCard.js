import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';

const ReviewCard = (props) => {
    const img = props.review.img
    return (
        <div>
            {/* here I'm trying to set image on the card from facebook image */}
            <Container className='mb-5'>
                <Col>
                    <Card style={{ width: '17rem' }}>
                        <Card.Img variant="top" src={img} />
                    </Card>
                </Col>
            </Container>
        </div>
    );
};

export default ReviewCard;
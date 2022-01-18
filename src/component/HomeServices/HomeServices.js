import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './HomeServices.css';

const HomeServices = (props) => {
    const { classes, grammer, img, listening, name, price, reading, solveClass, speaking, writting } = props.service;

    return (
        <div>
            <Container className='mb-5'>
                <Col>
                    <Card style={{ width: '17rem', height: '38rem' }}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title><h2>{name}</h2></Card.Title>
                            <Card.Text>
                                <h5>{classes}</h5>
                                <h5>{grammer}</h5>
                                <h5>{listening}</h5>
                                <h5>{reading}</h5>
                                <h5>{speaking}</h5>
                                <h5>{writting}</h5>
                                <h5>{solveClass}</h5>
                                <h4>{price}</h4>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
        </div>
    );
};

export default HomeServices;
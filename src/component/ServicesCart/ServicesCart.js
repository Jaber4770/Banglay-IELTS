import { Card, Col, Container } from 'react-bootstrap';

const ServicesCart = (props) => {
    const { GT, academic, img, listening, name, AcademicGT, reading, solveClass, speaking, writting } = props.service;
    return (
        <div>
            <Container className='mt-4 mb-3'>
                <Col>
                    <Card style={{ width: '15rem', height: '15rem' }}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body className='text-center'>
                            <Card.Title><h2>{name}</h2></Card.Title>
                            <Card.Text>
                                <h4>{listening}</h4>
                                <h4>{reading}</h4>
                                <h4>{speaking}</h4>
                                <h4>{writting}</h4>
                                <h4>{GT}</h4>
                                <h4>{AcademicGT}</h4>
                                <h4>{academic}</h4>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
        </div>
    );
};

export default ServicesCart;
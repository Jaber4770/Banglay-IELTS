import { Card, Col, Container } from 'react-bootstrap';
import './ServicesCard.css'

const ServicesCart = (props) => {
    // here I'm doing distructuring in props.service
    const { GT, academic, icon, grammer, listening, name, AcademicGT, reading, speaking, writting, vocabulary } = props.service;
    return (
        <div>
            <Container className='mt-4 mb-3'>
                <Col>
                {/* there i set the data which got by disturing */}
                    <Card style={{ width: '15rem', height: '16rem' }}>
                        <Card.Body className='text-center'>
                            <div className='icon-style'>
                                <h1 className={icon}> </h1>
                            </div>
                            <Card.Title><h1>{name}</h1></Card.Title>
                            <Card.Text>
                                <h4>{listening}</h4>
                                <h4>{reading}</h4>
                                <h4>{speaking}</h4>
                                <h4>{writting}</h4>
                                <h4>{GT}</h4>
                                <h4>{AcademicGT}</h4>
                                <h4>{academic}</h4>
                                <h4>{vocabulary}</h4>
                                <h4>{grammer}</h4>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
        </div >
    );
};

export default ServicesCart;
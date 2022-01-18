import { Card, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeanpub } from '@fortawesome/free-brands-svg-icons';
import { faBookReader, faBriefcase, faChartBar, faDoorOpen, faEnvelopeOpenText, faGraduationCap, faHeadphones, faLightbulb, faLink, faMicrophoneAlt, faPencilAlt, faWifi } from '@fortawesome/free-solid-svg-icons'

const ServicesCart = (props) => {
    const { GT, academic, img, listening, name, AcademicGT, reading, speaking, writting } = props.service;
    return (
        <div>

            <FontAwesomeIcon icon={faWifi} />
            <FontAwesomeIcon icon={faHeadphones} />
            <FontAwesomeIcon icon={faBookReader} />
            <FontAwesomeIcon icon={faPencilAlt} />
            <FontAwesomeIcon icon={faBriefcase} />
            <FontAwesomeIcon icon={faMicrophoneAlt} />
            <FontAwesomeIcon icon={faGraduationCap} />
            <FontAwesomeIcon icon={faLeanpub} />
            <FontAwesomeIcon icon={faEnvelopeOpenText} />
            <FontAwesomeIcon icon={faChartBar} />
            <FontAwesomeIcon icon={faDoorOpen} />
            <FontAwesomeIcon icon={faLightbulb} />
            <FontAwesomeIcon icon={faLink} />


            <Container className='mt-4 mb-3'>
                <Col>
                    <Card style={{ width: '15rem', height: '15rem' }}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body className='text-center'>
                            <Card.Title><h1>{name}</h1></Card.Title>
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
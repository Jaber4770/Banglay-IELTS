import React, { createContext, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import img from '../../images/HomeCoverImage.jpg'
import HomeServices from '../HomeServices/HomeServices';
import MyQuote from '../Myquote/MyQuote';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import './home.css'
export const ServiceContext = createContext('Service');

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./HomeServicesData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <img className='cover-img' src={img} alt="for contact" />
            <Container>
                <div>
                    <MyQuote></MyQuote>
                    <Row xs={1} md={2} lg={4} >
                        {
                            services.map(service => <HomeServices
                                key={service.id}
                                service={service}
                            ></HomeServices>)
                        }
                    </Row>
                </div>
                <WhyChooseUs></WhyChooseUs>
            </Container>
        </div>
    );
};

export default Home;
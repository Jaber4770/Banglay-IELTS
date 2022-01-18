import React, { createContext, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import img from '../../images/HomeCoverImage.jpg'
import HomeServices from '../HomeServices/HomeServices';
import MyQuote from '../Myquote/MyQuote';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import './home.css'
export const ServiceContext = createContext('Service');

const Home = () => {
    // get data for home cards service from public folder > HomeServicesData.json
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./HomeServicesData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            {/* This image coverd home page fist section */}
            <img className='cover-img' src={img} alt="for contact" />
            <Container>
                <div>
                    {/* Quote of Instructor */}
                    <MyQuote></MyQuote>
                    {/* made for 4 cards in home page and */}
                    <Row xs={1} md={2} lg={4} >
                        {/* sending data to HomeServices */}
                        { 
                            services.map(service => <HomeServices
                                key={service.id}
                                service={service}
                            ></HomeServices>)
                        }
                    </Row>
                </div>
                {/* Why choose us component called here */}
                <WhyChooseUs></WhyChooseUs>
            </Container>
        </div>
    );
};

export default Home;
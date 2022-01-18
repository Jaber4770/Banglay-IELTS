import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ServicesCart from '../ServicesCart/ServicesCart';
import './Service.css'

const Service = () => {
    // There i am loading data from ServicesData, public folder and converting data to js from json and sendint data to servicesCart by using map.
    
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./ServicesData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <Container className='mt-3 mb-5'>
            <div>
                <h3 className='text-center bg-color p-3 mb-4 Our-services'>Our Services</h3>
            </div>
            <div>
                <Row xs={1} md={2} lg={4} >
                    {
                        services.map(service => <ServicesCart
                            key={service.id}
                            service={service}>
                        </ServicesCart>)
                    }
                </Row>
            </div>
        </Container>
    );
};

export default Service;
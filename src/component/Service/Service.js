import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ServicesCart from '../ServicesCart/ServicesCart';

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./ServicesData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
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
    );
};

export default Service;
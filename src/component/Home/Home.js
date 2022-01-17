import React, { useEffect, useState } from 'react';
import img from '../../images/HomeCoverImage.jpg'
import HomeServices from '../HomeServices/HomeServices';
import './home.css'

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./servicesData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div>
            <img className='cover-img' src={img} alt="for contact" />
            {
                services.map(service => <HomeServices
                     key={service.id} 
                     service={service}
                     ></HomeServices>)
            }
        </div>
    );
};

export default Home;
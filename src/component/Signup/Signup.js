import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../Hooks/useAuth';
import './Signup.css'

const Signup = () => {
    const { SignInUsingGoogle } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirectUrl = location.state?.from || '/login'

    const handleGoogleLogin = () => {
        SignInUsingGoogle()
            .then(result => {
            history.push(redirectUrl);
        })
    }
    return (
        <div>
            <h2 className='text-center why-chs-bg p-3'>Welcome to Banglay IELTS.</h2>
            <h2 className='text-center mt-3'>Signup here!</h2>
            <Container>
                <div className='my-4 center'>
                    <div className='shadow width-40 text-center'>
                        <form>
                            <label htmlFor="">Name:</label>
                            <input type="text" placeholder='Your Name' name="" id="" />
                            <br />
                            <br />
                            <label htmlFor="">Email:</label>
                            <input type="email" placeholder='Your Email' name="" id="" />
                            <br />
                            <br />
                            <label htmlFor="">Password:</label>
                            <input type="password" placeholder='Your Password' name="" id="" />
                            <br />
                            <br />
                            <label htmlFor="">Password:</label>
                            <input type="password" placeholder='Re-enter Your Password' name="" id="" />
                            <br />
                            <br />
                            <input className='mb-3' type="submit" value="Submit" />
                        </form>
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                        <h5 className='sign-in-heading mt-5 mb-3'>Sign in With other Account!</h5>
                        <button className='gle-log-in' onClick={handleGoogleLogin}>Google</button>
                        <button className='fb-log-in'>Facebook</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Signup;
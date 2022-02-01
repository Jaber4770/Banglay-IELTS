import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Signup.css'

const Signup = () => {
    const { SignInUsingGoogle } = useAuth();
    return (
        <div>
            <h2 className='text-center why-chs-bg p-3'>Welcome to Banglay IELTS!</h2>
            <h2 className='text-center mt-3'>Sign up here!</h2>
            <Container>
                <div className='my-4 text-center'>
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
                    <h5 className='sign-in-heading'>Sign in With other Account!</h5>
                    <button className='gle-log-in' onClick={SignInUsingGoogle}>Google</button>
                    <button className='fb-log-in'>Facebook</button>
                </div>
            </Container>
        </div>
    );
};

export default Signup;
import React from 'react';
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
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
        <h2 className='text-center why-chs-bg p-3'>Welcome back!</h2>
        <h2 className='text-center mt-3'>Log in your account!</h2>
        <Container>
            <div className='my-4 center'>
                <div className='shadow width-40 text-center'>
                    <form>
                        <label htmlFor="">Email:</label>
                        <input type="email" placeholder='Your Email' name="" id="" />
                        <br />
                        <br />
                        <label htmlFor="">Password:</label>
                        <input type="password" placeholder='Your Password' name="" id="" />
                        <br />
                        <br />
                        <input type="submit" value="Submit" />
                        <br />
                        <br />
                    </form>
                    <p>New to Banglay IELTS? <Link to="/signup">Sign up</Link></p>
                    <h5 className='sign-in-heading mt-5 mb-3'>Sign in With other Account!</h5>
                    <button className='gle-log-in' onClick={handleGoogleLogin}>Google</button>
                    <button className='fb-log-in'>Facebook</button>
                </div>
            </div>
        </Container>
    </div>
);
};

export default Login;
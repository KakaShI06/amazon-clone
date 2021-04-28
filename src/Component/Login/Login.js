import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import { auth } from './../../firebase.js';

function Login() {

    const history = useHistory();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
               
                history.push('/')
            })
            .catch((err) => alert(err.message));

    }

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push('/');
                }
            })
            .catch((err) => alert(err.message));

    }

    return (
        <div className = 'login'>
            <Link to = '/'>
                <img
                    className='login__logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png'
                    alt = 'login-logo'
                />
            </Link>

            <div className="login__container">
                <h1>Sign-In</h1>

                <form>
                    <h5>Email</h5>
                    <input type="text" value={ email } onChange={(e) => setEmail(e.target.value)}/>
                    
                    <h5>Password</h5>
                    <input type="password" value = { password } onChange={(e) => setPassword(e.target.value)} />
                    
                    <button className="login___signInButton" type = "submit" onClick={signIn}>Sign In</button>

                </form>

                <p>By continuing, you agree to Amazon Clone's Conditions of Use and Privacy Notice.</p>

                <small className="login__blurText">New To Amazon Clone?</small>

                <button className="login___registerButton" onClick= {register}>Create Your Amazon Clone Account</button>

            </div>
        </div>
    )
}

export default Login

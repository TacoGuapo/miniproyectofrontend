import React, { useState } from 'react';
import axios from '../../api/api';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/login', { email, password });
      console.log(response.data);
    
      navigate('/profile');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='principal-login'>
      <div className='login-menu'>
        <img className='logo-login' src="logo.svg" alt="" />
        <p className='login-title'>Login</p>
        <div className='login-id'>
          <form onSubmit={handleSubmit}>
            <div className='login-input'>
              <img src="mailLogo.svg" alt="" />
              <input type="email" id="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className='login-input'>
              <img src="closeLogo.svg" alt="" />
              <input type="password" id="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button className='button-login' type="submit">Login</button>
          </form>
        </div>
        <span className='spanone'>or continue with these social profiles</span>
        <div className="redsocial">
          <div className='images'>
            <img className='socials' src="googleLogo.svg" alt="" />
            <img className='socials' src="facebookLogo.svg" alt="" />
            <img className='socials' src="twitterLogo.svg" alt="" />
            <img className='socials' src="githubLogo.svg" alt="" />
          </div>
        </div>
        <div className='spantwo'>
          <span>
            Don't have an account yet? <Link className='register' to="/register">Register</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;

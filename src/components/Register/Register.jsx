import React, { useState } from 'react';
import axios from '../../api/api';
import { useNavigate } from 'react-router-dom'; 
import './Register.css';

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/register', { email, password });
      console.log(response.data);
      navigate('/login')
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='principal-register'>
      <div className='login-menu-two'>
        <img className='logo-login' src="logo.svg" alt="" />
        <p className='commentOne'>Join thousands of learners from around the world </p>
        <p className='commentTwo'>Master web development by making real-life projects. There are multiple paths for you to choose</p>
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
            <button className='button-start' type="submit">Start coding now</button>
          </form>
        </div>
        <div className='spantree'>
          <span className='spantree'>or continue with these social profiles</span>
        </div>
        <div className="redsocial">
          <div className='images'>
            <img className='socials' src="googleLogo.svg" alt="" />
            <img className='socials' src="facebookLogo.svg" alt="" />
            <img className='socials' src="twitterLogo.svg" alt="" />
            <img className='socials' src="githubLogo.svg" alt="" />
          </div>
        </div>
        <div className='spanfour'>
          <span className='spanfour'>
            Already a member? <a className='register' href="/login">Login</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Register;

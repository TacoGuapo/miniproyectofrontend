import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; // Asegúrate de importar los estilos

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('URL_DE_TU_API_PARA_LOGIN', { email, password });
      console.log(response.data); // Maneja la respuesta según tu API
      // Aquí podrías redirigir al perfil u otra página si el inicio de sesión es exitoso
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
            Don't have an account yet? <a className='register' href="/register">Register</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;

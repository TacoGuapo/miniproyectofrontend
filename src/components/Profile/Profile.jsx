// Profile.jsx

import React, { useState, useEffect } from 'react';
import axios from '../../api/api';
import './Profile.css';
import Modal from '../Modal/Modal'; // Asegúrate de importar el componente Modal

function Profile() {
  const [profile, setProfile] = useState({
    name: '',
    bio: '',
    phone: '',
    email: '',
    password: '',
  });
  const [editMode, setEditMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('/profile');
        const { data } = response.data;
        setProfile(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchProfile();
  }, []);

  const handleSave = async () => {
    try {
      const response = await axios.put('/profile', profile);
      console.log('Profile updated:', response.data);
      setEditMode(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleLogout = async () => {
    try {
      await axios.post('/login');

      setProfile({
        name: '',
        bio: '',
        phone: '',
        email: '',
        password: '',
      });

      window.location.href = '/login'; 
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="menu-profile">
      <nav className="nav-bar">
        <div className="logo-profile">
          <img src="logo.svg" alt="devchallenges logo" />
        </div>
        <div className="user-info">
          <img src="user.jpg" alt="" />
          <span className="spanName">{profile.name}</span>
          <button className="square-button" onClick={() => setIsModalOpen(!isModalOpen)}>+</button>
        </div>
      </nav>
      <div className="profile-section">
        <div className="title-header">
          <h2>Personal info</h2>
          <p>Basic info, like your name and photo</p>
        </div>
        <div className="profile-card">
          <div className="header-info">
            <div className="header-menu">
              <h3>Profile</h3>
              <p>Some info may be visible to other people</p>
            </div>
            {!editMode && <button onClick={handleEdit}>Edit</button>}
            {editMode && <button onClick={handleSave}>Save</button>}
          </div>
          <div className="info-profile">
            <div className="field">
              <label htmlFor="photo">PHOTO</label>
              <img className="profile-photo" src="user.jpg" alt="Profile" />
            </div>
            <div className="field">
              <label htmlFor="name">NAME</label>
              <input
                type="text"
                id="name"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className={editMode ? 'editable' : ''}
                readOnly={!editMode}
              />
            </div>
            <div className="field">
              <label htmlFor="bio">BIO</label>
              <textarea
                id="bio"
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                className={editMode ? 'editable' : ''}
                readOnly={!editMode}
              />
            </div>
            <div className="field">
              <label htmlFor="phone">PHONE</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                className={editMode ? 'editable' : ''}
                readOnly={!editMode}
              />
            </div>
            <div className="field">
              <label htmlFor="email">EMAIL</label>
              <input
                type="email"
                id="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className={editMode ? 'editable' : ''}
                readOnly={!editMode}
              />
            </div>
            <div className="field">
              <label htmlFor="password">PASSWORD</label>
              <input
                type="password"
                id="password"
                name="password"
                value={profile.password}
                onChange={handleChange}
                className={editMode ? 'editable' : ''}
                readOnly={!editMode}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onLogout={handleLogout} />
    </div>
  );
}

export default Profile;

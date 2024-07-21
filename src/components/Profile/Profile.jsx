import React from 'react'
import { useState } from 'react';
import Footer from '../Footer/Footer';
import './Profile.css'

function Profile() {
    const [profile, setProfile] = useState({
        name: 'Xanthe Neal',
        bio: 'I am a software developer and a big fan of devchallenges...',
        phone: '908249274292',
        email: 'xanthe.neal@gmail.com',
        password: '************',
    });

    const handleEdit = () => {

        console.log('Edit button clicked!');
    };

    return (
        <div className="menu-profile">
            <nav className="nav-bar">
                <div className="logo-profile">
                    <img src="logo.svg" alt="devchallenges logo" />
                </div>
                <div className="user-info">
                    <img src="horseman.jpg" alt="Xanthe Neal" />
                    <span className='spanName'>Xanthe Neal</span>
                </div>
            </nav>
            <div className="profile-section">
                <div className='title-header'>
                <h2>Personal info</h2>
                <p>Basic info, like your name and photo</p>
                </div>
                <div className="profile-card">
                    <div className='header-info'>
                        <div className='header-menu'>
                            <h3>Profile</h3>
                            <p>Some info may be visible to other people</p>

                        </div>
                        <button onClick={handleEdit}>Edit</button>
                    </div>
                    <div className='info-profile'>
                        <div className="field">
                            <label htmlFor="photo">PHOTO</label>
                            <img className='profile-photo' src="horseman.jpg" alt="Xanthe Neal" />
                        </div>
                        <div className="field">
                            <label htmlFor="name">NAME</label>
                            <input type="text" id="name" value={profile.name} readOnly />
                        </div>
                        <div className="field">
                            <label htmlFor="bio">BIO</label>
                            <textarea id="bio" value={profile.bio} readOnly />
                        </div>
                        <div className="field">
                            <label htmlFor="phone">PHONE</label>
                            <input type="text" id="phone" value={profile.phone} readOnly />
                        </div>
                        <div className="field">
                            <label htmlFor="email">EMAIL</label>
                            <input type="email" id="email" value={profile.email} readOnly />
                        </div>
                        <div className="field">
                            <label htmlFor="password">PASSWORD</label>
                            <input type="password" id="password" value={profile.password} readOnly />
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    );
}

export default Profile;
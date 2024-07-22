import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, onLogout }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="square-button" onClick={onClose}>+</button>
            <ul>
              <li><a href="#">My Profile</a></li>
              <li><a href="#">Group Chat</a></li>
              <li><button onClick={onLogout}>Logout</button></li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
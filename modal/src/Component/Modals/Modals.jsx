import React, { useState } from 'react';
import './Modals.css';

const XModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!username || !email || !phone || !dob) {
      alert('Please fill out all fields.');
      return;
    }
    if (!email.includes('@')) {
      alert('Invalid email');
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      alert('Invalid phone number');
      return;
    }
    const today = new Date();
    const selectedDate = new Date(dob);
    if (selectedDate > today) {
      alert('Invalid date of birth');
      return;
    }
    alert('Form submitted successfully!');
    setUsername('');
    setEmail('');
    setPhone('');
    setDob('');
    setIsOpen(true);
  };

  const handleModalClick = (e) => {
    if (e.target.className === 'modal') {
      setIsOpen(false);
    }
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Form</button>
      {isOpen && (
        <div className="modal" onClick={handleModalClick}>
          <div className="modal-content">
            <h2>Fill Details</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <label htmlFor="phone">Phone:</label>
                <input type="number" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div>
                <label htmlFor="dob">Date of Birth:</label>
                <input type="date" id="dob" value={dob} onChange={(e) => setDob(e.target.value)} />
              </div>
              <button className="submit-button" type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default XModal;

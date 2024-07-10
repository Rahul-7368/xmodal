import React, { useState } from "react";
import './App.css';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (e) => {
    if(e.target.className === 'modal') {
      setIsModalOpen(false);
    }

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) {
      alert('Username is required');
      return;
    }
    if (!email.includes('@')) {
      alert('Invalid email. Please check your email address.');
      return;
    }
    if (phone.length !== 10) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
      return;
    }
    const today = new Date();
    const birthDate = new Date(dob);
    if (birthDate > today) {
      alert('Invalid date of birth. Please enter a valid date of birth.');
      return;
    }

    setUsername('');
    setEmail('');
    setDob('');
    setPhone('');
    setIsModalOpen(false);
  };

  return(
    <div>
      <h1>User Details Modal</h1>
      <button onClick = {handleOpenModal}>Open Form</button>
      {isModalOpen && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <label>
                Username:
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  />
              </label>
              <br />
              <label>
                Email:
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
              </label>
              <br />
              <label>
                Date of Birth:
                <input
                  type="date"
                  id="dob"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  />

              </label>
              <br />
              <label>
                Phone:
                <input
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  />
              </label>
              <br/>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );

};


export default App;


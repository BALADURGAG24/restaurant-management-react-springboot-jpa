import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Perform validation
    if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
      setErrorMessage('Please fill in all the fields.');
    } else {
      // Reset error message
      setErrorMessage('');

      // Perform signup logic here
      console.log(`Username: ${username} Email: ${email} Password: ${password}`);

      // Reset the form
      setUsername('');
      setEmail('');
      setPassword('');

      // Navigate to the home page
      navigate('/Home');
    }
  };

  return (
    <div className='bgh1'>
      <div className="containerss">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h1 style={{ color: 'black' }}>Signup</h1>
          <form onSubmit={handleFormSubmit}>
            <label style={{ color: 'white' }}>
              Username:
              <input className="input-field" type="text" placeholder="Enter username" value={username} onChange={handleUsernameChange} />
            </label>
            <br />
            <label style={{ color: 'white' }}>
              Email:<br></br>
              <input className="input-fieldx" type="email" placeholder='Enter Email' value={email} onChange={handleEmailChange} />
            </label>
            <br />
            <label style={{ color: 'white' }}>
              Password:
              <input className="input-field" type="password" placeholder='Enter password' value={password} onChange={handlePasswordChange} />
            </label>
            <br />
            <br />
            <button className="button" type="submit">Signup</button>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

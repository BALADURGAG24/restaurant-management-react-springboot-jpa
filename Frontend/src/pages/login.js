import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Perform validation
    if (username.trim() === '' || password.trim() === '') {
      setErrorMessage('Please enter both username and password.');
    } else {
      // Reset error message
      setErrorMessage('');

      // Perform login logic here
      console.log(`Username: ${username} Password: ${password}`);

      // Reset the form
      setUsername('');
      setPassword('');

      // Navigate to the home page
      window.location.href = '/Home';
    }
  };

  const handleSignupClick = () => {
    // Logic to handle signup button click
    console.log('Signup button clicked');
  };

  return (
    <div className="bk">
      <div className="containerss">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow" style={{background:"white"}}>
          <h1 style={{ color: 'black' }}>Login</h1>
          <form onSubmit={handleFormSubmit}>
            <label style={{ color: 'white' }}>
              Username:
              <input className="input-field" type="text" placeholder="Enter username" value={username} onChange={handleUsernameChange} />
            </label>
            <br />
            <br />
            <label style={{ color: 'white' }}>
              Password:
              <input className="input-field" type="password" placeholder='Enter password' value={password} onChange={handlePasswordChange} />
            </label>
            <br />
            <br />
            <button className="button1" type="submit">Login</button>
            <br />
            <br />
            <Link to="/Signup" className="button-link">
              <button className="button">Signup</button>
            </Link>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

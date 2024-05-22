import React, { useState } from 'react';
import './Register.css';
import Main from './Mentee/Main';
import App from './App';

function Register() {
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');
  const [currentPage, setCurrentPage] = useState('register');

  const handleRegister = (e) => {
    e.preventDefault();
    if (currentPage === 'register') {
        if (password !== confirmPassword) {
            alert('Password and Confirm Password must match');
            return;
        }
        console.log("Fullname:", fullname);
        console.log("Email:", email);
        console.log("Phone Number:", phoneNumber);
        console.log("Username:", username);
        console.log("Password:", password);
        console.log("Confirm Password:", confirmPassword);
        alert('Registration Successfull!');
    } else if (currentPage === 'register') {
      setCurrentPage('login');
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <App />
      case 'register':
        return (
          <div className="register-container">
            <div className="left-section">
              <img src="/src/files/images/LoginImg.png" alt="Login Image" />
            </div>
            <div className="right-section">
              <div className="logo">
                <img className="ut" src="/src/files/images/LogoUnitedTractors.png" alt="United Tractors Logo" />
                <img className="elomate" src="/src/files/images/LogoElomate.png" alt="Elomate Logo" />
              </div>
              <div className="card">
                <h1 className="text-header"><b>Registration</b></h1>
                <p className="text-paragraph">Silakan masukkan data diri anda untuk mendaftar akun UT Elomate</p>
                <form onSubmit={handleRegister}>
                  <input
                    type="text"
                    placeholder="Fullname"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Username/NRP"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <div className="button">
                    <button type="submit"><b>Register</b></button>
                  </div>
                  <a className="gotoLog" href="#" onClick={() => setCurrentPage('login')}>Already have an an account? Login</a>
                </form>
              </div>
            </div>
          </div>
        );
      case 'main':
        return <Main />;
    }
  };

  return (
    <div className="Register">
      {renderPage()}
    </div>
  );
}

export default Register;
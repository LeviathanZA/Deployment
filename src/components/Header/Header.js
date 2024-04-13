// components/Header/Header.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'; // Import Link
import { logoutUser } from '../../actions/authActions'; // Import logoutUser action
import RegistrationForm from '../LandingPage/RegistrationForm';

const Header = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser()); // Dispatch logoutUser action
  };

  return (
    <header>
      <div className="container">
        {/* Home page link with registration form */}
        <Link to="/">Home</Link>
      </div>
      <div className="container">
        {/* Navigation links */}
        <Link to="/store">Store</Link>
        <Link to="/cart">Cart</Link>
        {isAuthenticated ? (
          <>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </header>
  );
};

export default Header;

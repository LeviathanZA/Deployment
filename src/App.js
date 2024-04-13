// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import Store from './components/Store/Store';
import Cart from './components/Cart/Cart';
import LoginForm from './components/LandingPage/LoginForm';
import RegistrationForm from './components/LandingPage/RegistrationForm';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/store" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path='/register' element={<RegistrationForm />} />
      </Routes>
    </Router>
  );
};

export default App;

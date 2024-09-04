import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../components/home';
import Login from '../components/login';

const AppRoutes = () => {
  return (
    <Router>
        <Home/>
        <Login/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

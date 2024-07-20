import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Users from './pages/Users';
import './App.css';

const App = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<h1>Welcome to Sri Mandir</h1>} />
      <Route path="/users" element={<Users />} />
    </Routes>
  </Router>
);

export default App;

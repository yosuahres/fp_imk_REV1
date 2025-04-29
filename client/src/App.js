import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/landing/Landing';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Question from '../src/components/form/Question';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/question" element={<Question />} />
      </Routes>
    </Router>
  );
}

export default App;
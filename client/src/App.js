import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Landing from './components/landing/Landing';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Question from './components/form/Question';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={isAuthenticated ? <Question /> : <Landing />} />
          <Route path="/form" element={isAuthenticated ? <Question /> : <Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/question" element={<Question />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
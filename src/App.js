import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import DashboardPage from './pages/Dashboard';
import SignUpPage from './pages/SignUp';
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" exact element={<DashboardPage/>} />
      <Route path="/sign-up" exact element={<SignUpPage/>} />
      </Routes>
    </Router>
  );
}



export default App;

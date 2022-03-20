import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import DashboardPage from './pages/Dashboard';
import LoginPage from './pages/Login';
import SignUpPage from './pages/SignUp';
import About from './pages/About';
import NavBar from './components/NavBar';
import Calculate from './pages/Calculate';
import Offset from './pages/Offset';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
      <Route path="/" exact element={<DashboardPage/>} />
      <Route path="/log-in" exact element={<LoginPage/>} />
      <Route path="/sign-up" exact element={<SignUpPage/>} />
      <Route path="/about" exact element={<About/>} />
      <Route path="/calculate" exact element={<Calculate/>} />
      <Route path="/offset" exact element={<Offset/>} />
      </Routes>
    </Router>
  );
}



export default App;

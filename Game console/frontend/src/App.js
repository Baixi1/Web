import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

// pages & components
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Info from './pages/Info';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Modal from './components/CreateModal';
import Pin from './components/Pin';
import Updatepin from './components/Updatepin';


function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/Info" element={<Info />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Login" element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path="/Signup" element={!user ? <Signup /> : <Navigate to="/" />} />
            <Route path="/create-item" element={<Modal/>} />
            <Route path="/show-item/:id" element={<Pin/>} />
            <Route path="/edit-item/:id" element={<Updatepin/>} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

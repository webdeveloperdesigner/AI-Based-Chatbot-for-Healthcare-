// import React, {useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Admin from "./components/Admin/Admin";
import User from "./components/user/User"



import About from './pages/About';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Contact from './pages/Contact';


function App() {






  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user/Main" element={<User/>} />




                {/* Public Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

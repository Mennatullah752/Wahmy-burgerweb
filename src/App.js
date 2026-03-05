import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <Router>
      <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}>
        {/* الهيدر ثابت */}
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

        {/* الصفحة الرئيسية */}
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/menu" element={<Menu darkMode={darkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
          <Route path="/cart" element={<Cart darkMode={darkMode} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login/>} />
        </Routes>

        <Footer darkMode={darkMode} />
      </div>
    </Router>
  );
}

export default App;

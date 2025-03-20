import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css"; // Import the CSS file
import logo from '../../assets/logo.jpg'
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { AiTwotoneMail } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo on the left */}
        <Link to="/">
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        </Link>
        <div>
            <p className="company-title">Hemadri Kitchenware</p>
        </div>

        {/* Links on the right (hidden on mobile) */}
        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <a href="mailTo:hemadrienterprises2022@gmail.com" target="_blank" rel="noopener noreferrer">
            <AiTwotoneMail color="red"/>
          </a>
          <a href="https://instagram.com/hemadri_kitchenware?utm_source=qr&igsh=cmFnbWxjMnBxNTVh" target="_blank" rel="noopener noreferrer">
          <FaInstagram color="pink"/>
          </a>
          <a href="https://wa.me/917338232905" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp color="green"/>
          </a>
          <a href="https://maps.app.goo.gl/6xEgLsd84jrdoFA2A" target="_blank" rel="noopener noreferrer">
          <IoLocationOutline/>
          </a>
        </div>

        {/* Mobile menu button (hidden on desktop) */}
        <div className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import React from 'react'
import { FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import './footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>Hemadri Enterprises</h2>
          <p>10, Sir MV Layout, Tindlu, Virupakshapura, Bengaluru, Karnataka 560097</p>
          <p>Owned by: Shwetha R</p>
          <p>GSTIN: 29FXSPS7093R1ZP</p>
        </div>

    
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p><FaPhoneAlt /> +91 73382 32905</p>
          <p><FaEnvelope /> hemadrienterprises2022@gmail.com</p>
          <p><FaMapMarkerAlt /> <a href="https://maps.app.goo.gl/6xEgLsd84jrdoFA2A">View on Map</a></p>
        </div>

        <div className="footer-section">
          <h2>Follow Us</h2>
          <a href="https://instagram.com/hemadri_kitchenware?utm_source=qr&igsh=cmFnbWxjMnBxNTVh" target="_blank" rel="noopener noreferrer">
            <FaInstagram /> Instagram
          </a>
          <a href="https://wa.me/917338232905" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
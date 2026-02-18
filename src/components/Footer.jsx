import React from 'react';
import './Footer.css';
import { FaInstagram, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      
      <div className="social-icons">
        <a href="https://www.instagram.com/pinjani_himani" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.linkedin.com/in/himani-pinjani-b15b4b317/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="mailto:contact@eventbook.com"><FaEnvelope /></a>
        <a href="https://github.com/himani23-creator" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      </div>

      
      <h2 className="footer-logo">EventBook</h2>

      
      <p className="footer-description">
        EventBook is your one-stop destination for discovering, organizing, and managing events. 
        Whether you're planning a concert, workshop, or webinar, we've got the tools to make it unforgettable. 
        Connect with your audience, sell tickets, and bring your event vision to life — all in one place. 
        Trusted by thousands of organizers across India.
      </p>

      
      <div className="footer-links">
        <div className="footer-column">
          <h3>QUICK LINKS</h3>
          <ul>
            <li><a href="/events">Events</a></li>
            <li><a href="/create-event">Create Event</a></li>
            <li><a href="/help-center">Help Center</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>INFO</h3>
          <ul>
            <li>EventBook HQ, Mumbai</li>
            <li>New Delhi - Sector 45</li>
            <li>Bangalore Office - MG Road</li>
          </ul>
        </div>
      </div>

      
      <p className="footer-bottom">© 2025 EventBook. All rights reserved.</p>
    </footer>
  );
}


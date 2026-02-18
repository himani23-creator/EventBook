import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import AuthButton from './AuthButton';
import SearchBar from './SearchBar';

function Header({ events }) {
  return (
    <header className="header">
      
     
      <div className="logo">
        <Link to="/">EventBook</Link>
      </div>

      
      <div className="search-container">
        <SearchBar events={events} />
      </div>

      
      <nav className="nav-links">
        <Link to="/events">Events</Link>
        <Link to="/create-event">Create Event</Link>
        <Link to="/help-center">Help Center</Link>
      </nav>

      
      <div className="auth-button">
        <AuthButton />
      </div>
    </header>
  );
}

export default Header;




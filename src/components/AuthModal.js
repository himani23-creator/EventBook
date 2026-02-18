import React, { useState } from 'react';
import './AuthModal.css';

export default function AuthModal({ isOpen, onClose }) {
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(isSignup ? 'Signed up successfully!' : 'Logged in successfully!');
    onClose(); 
  };

  if (!isOpen) return null;

  return (
    <div className="auth-overlay">
      <div className="auth-modal">
        <button onClick={onClose} className="auth-close" aria-label="Close modal">
          &times;
        </button>
        <h2 className="auth-title">
          {isSignup ? "Let's get started!" : 'Welcome back!'}
        </h2>
        <p className="auth-subtitle">
          {isSignup ? 'What’s your email?' : 'Please enter your login details.'}
        </p>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" placeholder="abc@gmail.com" className="auth-input" required />
          </label>
          <label>
            Password:
            <input type="password" placeholder="••••••••" className="auth-input" required />
          </label>
          {isSignup && (
            <label>
              Username:
              <input type="text" placeholder="Pick a username" className="auth-input" required />
            </label>
          )}
          <button type="submit" className="auth-submit">
            {isSignup ? 'Create Account' : 'Login'}
          </button>
        </form>
        <p className="auth-switch">
          {isSignup ? 'Already have an account?' : 'Don’t have an account?'}{' '}
          <button onClick={() => setIsSignup(!isSignup)} className="auth-toggle">
            {isSignup ? 'Login instead' : 'Sign up now'}
          </button>
        </p>
      </div>
    </div>
  );
}



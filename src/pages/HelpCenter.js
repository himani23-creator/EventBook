import React from 'react';
import './HelpCenter.css'; 

const HelpCenter = () => {
  return (
    <div className="help-container">
      <h1>Help Center</h1>
      <p className="intro">
        Feel free to reach out if you have any questions, feedback, or support needs!
      </p>

      <div className="profile">
        <h2>Contact: Himani Pinjani</h2>
        <ul className="contact-list">
          <li>
            <strong>Email:</strong>{' '}
            <a href="mailto:himanipinjani23@gmail.com">himanipinjani23@gmail.com</a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{' '}
            <a href="https://www.linkedin.com/in/himani-pinjani-b15b4b317/" target="_blank" rel="noopener noreferrer">
              https://www.linkedin.com/in/himani-pinjani-b15b4b317/
            </a>
          </li>
          <li>
            <strong>Instagram:</strong>{' '}
            <a href="https://www.instagram.com/pinjani_himani/" target="_blank" rel="noopener noreferrer">
              @pinjani_himani
            </a>
          </li>
          <li>
            <strong>GitHub:</strong>{' '}
            <a href="https://github.com/himani23-creator" target="_blank" rel="noopener noreferrer">
              github.com/himanipinjani
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default HelpCenter;

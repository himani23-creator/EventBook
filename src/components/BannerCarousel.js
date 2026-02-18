import React, { useState } from 'react';
import './BannerCarousel.css';
import { useNavigate } from 'react-router-dom';

const banners = [
  {
    id: 1,
    title: 'Discover Events Near You',
    subtitle: 'Concerts, Festivals, Workshops & More',
    image: 'https://cdn.evbstatic.com/s3-build/fe/build/images/351517764e54e5677b68046496c5a1c1-festivals_desktop.webp',
   
  },
  {
    id: 2,
    title: 'Host Your Own Events',
    subtitle: 'Reach Thousands of Attendees Instantly',
    image: 'https://cdn.evbstatic.com/s3-build/fe/build/images/4fc883eca2b00c60d09ef5ae96c1bab0-city_browse_us_uk_ie_ca_desktop.webp',
  },
  {
    id: 3,
    title: 'Explore New Experiences',
    subtitle: 'Plan Your Next Weekend Adventure',
    image: 'https://cdn.evbstatic.com/s3-build/fe/build/images/cd6df335d9d4dbb4a0c3c9ea4f78542a-food_and_drink_desktop.webp',
  },
];


  export default function BannerCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const prevSlide = () => {
      setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
    };
  
    const nextSlide = () => {
      setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    };
    const navigate = useNavigate();

   const handleContactClick = () => {
    navigate('/help-center');
    };
  
    return (
      <div className="banner-carousel">
        <button className="banner-button prev" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="banner-slide">
          <img
            src={banners[currentIndex].image}
            alt={banners[currentIndex].title}
            className="carousel-image"
          />
          <div className="banner-overlay">
            <h1>Partner with EventBook</h1>
            <h2>Event Management in India</h2>
            <div className="banner-actions">
              <button className="contact-button" onClick={handleContactClick}>
              Contact Us
              </button>
              <div className="rating">
                <div className="stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < 4 ? 'star filled' : 'star half'}>&#9733;</span>
                  ))}
                </div>
               <div className="rating-text">4/5 Rating</div>
              </div>
            </div>
          </div>

    
    
        </div>

        <button className="banner-button next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

    );
  }


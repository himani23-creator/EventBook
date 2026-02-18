import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ClientReviews.css';

const reviews = [
  {
    name: 'Aarav Sharma',
    review: 'EventBook made planning so effortless. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Priya Mehta',
    review: 'Fantastic service and great support throughout the event!',
    rating: 4.5,
  },
  {
    name: 'Rohan Verma',
    review: 'Very professional team. Smooth experience from start to end.',
    rating: 4,
  },
  {
    name: 'Aaron Verma',
    review: 'Great website for event planning',
    rating: 4.8,
  },
  {
    name: 'Raj Khanna',
    review: 'Been using EventBook for years. Always satisfied with their service.',
    rating: 5,
  },
];

function ClientReviews() {
  return (
    <div className="client-reviews">
      <h2 className="client-reviews-title">See what our clients have to say</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
      >
        {reviews.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="review-card">
              <h3>{item.name}</h3>
              <p>"{item.review}"</p>
              <p className="rating">Rating: {item.rating} ⭐</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ClientReviews;

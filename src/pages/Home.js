import React from 'react';
import './Home.css';
import BannerCarousel from '../components/BannerCarousel';
import StatsSection from '../components/StatsSection';
import ClientReviews from '../components/ClientReviews';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';


function Home() {
  const nextEvent = [
    {
      img: "https://images.wanderon.in/blogs/new/2025/01/anubhav-singh-bassi-show.jpg",
      name: 'Comedy Show',
      date: '2025-06-15',
      location: 'The Laugh Store, DLF Cyber City, Gurgaon',
      price: '500Rs'
    },
    {
      img: "https://img.jagranjosh.com/images/2025/April/742025/rcb-vs-mi-head-to-head-where-to-watch-live-streaming-playing-eleven-and-other-details.webp",
      name: 'RCB vs MI Finals',
      date: '2025-06-25',
      location: 'Eden Gardens Kolkata',
      price: '5000Rs'
    },
    
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRKwTr-0NVuCSHHLTB-7qjqgUL7eO3CNuj4g&s",
      name: 'Shark Tank India',
      date: '2025-06-15',
      location: 'The Social House, Hauz Khas, Delhi',
      price: '500Rs'
    },
    {
      img: "https://media.assettype.com/knocksense%2F2024-11-20%2Fubx6g805%2Fddtebq.png?rect=0%2C0%2C1200%2C675",
      name: 'Diljit Dosanjh Concert',
      date: '2025-06-20',
      location: 'Jawaharlal Nehru Stadium (JLN Stadium) Delhi',
      price: '10000Rs'
    },
    {
      img: "https://www.fullers.co.uk/-/media/sites/main-website/mainsite/articles/christmas/christmas-party-venues/the-counting-house-bank-best-christmas-party-venue-london.jpg?h=450&w=700&hash=BD8E9BABB7F038D1031A969AA37C8F90",
      name: 'Drink Meet Up',
      date: '2025-06-20',
      location: 'The Social House, Hauz Khas, Delhi',
      price: '800Rs'
    },
    {
      img: "https://images.unsplash.com/photo-1573496529574-be85d6a60704?auto=format&fit=crop&w=800&q=80",
      name: 'Women in Leadership Forum',
      date: '2025-06-20',
      location: 'Convention Center, New Delhi',
      price: 'Free'
    }
  ];
  const cities = [
    {img: "https://media.istockphoto.com/id/1365421744/photo/taj-mahal-at-day-beautiful-scenery-of-india.jpg?s=612x612&w=0&k=20&c=BxB4nnulOAk-uJNReXZdCkSdOootr0b9ZlRNSvYn4ng=",
      name: 'Agra'
    },
    {img: "https://i.pinimg.com/736x/62/04/c1/6204c16b07c639eab0249ca41f0f6989.jpg",
      name: 'Ladakh'
    },
    {img: "https://i.pinimg.com/736x/cb/71/49/cb714920561dc0c6f83f7ed703ff2eae.jpg",
      name: 'Rishikesh'
    },
    {img: "https://i.pinimg.com/736x/8b/a1/e0/8ba1e06ee597c20c7d8975b4449c9646.jpg",
      name: 'Munnar'
    },
    {img: "https://i.pinimg.com/736x/d6/b7/a3/d6b7a3483548609c4ccff89bb713a616.jpg",
      name: 'Udaipur'
    },
    {img: "https://i.pinimg.com/736x/7c/63/84/7c6384436f50f7cabcf8838aa8d5a69c.jpg",
      name: 'Oooty'
    },
    {img: "https://i.pinimg.com/736x/3f/3a/df/3f3adf15991a706efcb94bc9f9b637ed.jpg",
      name: 'Jaipur'
    },
    {img: "https://i.pinimg.com/736x/87/ea/8a/87ea8a5771cf5bbb605b2de21edcd326.jpg",
      name: 'Goa'
    }
  

  ]
  
  return (
    
    <div className="home">
      <BannerCarousel/>
      <StatsSection/>
      
      <h1 className='upcoming'>Upcoming events</h1>
      <div className="grid-container">
        {nextEvent.map((e,idx) => (
          <div className="grid-item" key={idx}>
          <img src={e.img} alt={e.name}/>
          <p><strong>Event:</strong> {e.name}</p>
          <p><strong>Date:</strong> {e.date}</p>
          <p><strong>Location:</strong> {e.location}</p>
          <p><strong>{e.price}</strong></p>
          </div>
        ))}
        
      </div>
      <h1 className='upcoming'>Explore Top Venue’s in India</h1>
      <div className="carousel-container">
        {cities.map((c,idx) => (
          <div className='carousel-item' key={idx}>
            <img className="carousel-image" src={c.img} alt={c.name}/>
            <p className="city-name"><strong>{c.name}</strong></p>
          </div>
        ))}
      </div>
      <ClientReviews/>
      <FaqSection/>
      <Footer/>
    </div>
  );
}

export default Home;

import React from 'react';
import './EventList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListOl } from '@fortawesome/free-solid-svg-icons';

const Events = ({ events }) => {
  return (
    <div className="event-list">
      {events.length>0?(events.map((event, index) => (
        <div key={index} className="event-card">
          <h3><strong>Name: </strong>{event.name}</h3>
          <p className="event-date"><strong>Date: </strong>{event.date}</p>
          <p className="event-location"><strong>Location: </strong>{event.location}</p>
        </div>))):(
          <div className="no-events">
          <FontAwesomeIcon style={{ fontSize: '55px',textAlign:"center" }} icon={faListOl}/>
          <h2 className="event-heading">Add events,share it with your friends!</h2>
          <p className="event-description">
            Easy peasy
          </p>
        </div>
        )}
      
    </div>
  );
};

export default Events;


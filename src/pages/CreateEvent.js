import React, { useState } from 'react';
import './EventForm.css';

const CreateEvent = ({ addEvent }) => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!eventName || !eventDate || !eventLocation) {
      alert("Please fill out all fields.");
      return;
    }
    if (eventName && eventDate && eventLocation) {
      addEvent({
        name: eventName,
        date: eventDate,
        location: eventLocation,
      });
    
      setEventName('');
      setEventDate('');
      setEventLocation('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formm">
      <h2 className="headings">What's the title of your event?</h2>
      <p className="paragh">This will be your event’s title. Your title will be used to help create your event’s summary, description, category, and tags – so be specific!</p>
      <input
        type="text"
        placeholder="Event Name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />
      <h2 className="headings">When will your event happen?</h2>
      <input
        type="date"
        value={eventDate}
        onChange={(e) => setEventDate(e.target.value)}
      />
      <h2 className="headings">Tell us the venue of your event.</h2>
      <input
        type="text"
        placeholder="Event Location"
        value={eventLocation}
        onChange={(e) => setEventLocation(e.target.value)}
      />
      <button type="submit">Create Event</button>
    </form>
  );
};

export default CreateEvent;


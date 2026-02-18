
import React, { useState } from "react";
import './SearchBar.css';
const SearchBar = ({ events }) => {
  const [query, setQuery] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);

  const handleChange = (e) => {
    const input = e.target.value;
    setQuery(input);
    if (input.length > 0) {
      const matches = events.filter(event =>
        event.name.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredEvents(matches);
    } else {
      setFilteredEvents([]);
    }
  };

  const handleSelect = (name) => {
    setQuery(name);
    setFilteredEvents([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Search submitted for: ${query}`);
   
  };

  return (
    <form onSubmit={handleSubmit} className="search-container">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search events..."
        className="search-input"
      />
      <button type="submit" className="search-button">Search</button>
      {filteredEvents.length > 0 && (
        <div className="autocomplete-list">
          {filteredEvents.map((event, idx) => (
            <div
              key={idx}
              onClick={() => handleSelect(event.name)}
              className="autocomplete-item"
            >
              {event.name}
            </div>
          ))}
        </div>
      )}
    </form>
  );
};


export default SearchBar;

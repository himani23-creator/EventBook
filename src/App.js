import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HelpCenter from './pages/HelpCenter';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import CreateEvent from './pages/CreateEvent';
import './App.css';



function App() {
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  return (
    <Router>
      <div className="app">
        <Header events={events}/>
        
        
        <main className="main-content">
          <Routes>
          
            <Route path="/" element={
              <>
              
              <Home />
              </>} />
            <Route
              path="/events"
              element={<Events events={events} />}
            />
            <Route
              path="/create-event"
              element={<CreateEvent addEvent={addEvent} />}
            />
            <Route
              path="/help-center"
              element={<HelpCenter/>}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;



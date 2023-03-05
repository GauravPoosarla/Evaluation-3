import React from 'react';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import { useContext } from 'react';
import { EventDataContext } from '../../contexts/EventData';
import { useParams, useNavigate } from 'react-router';
import './EventPage.css';

const EventPage = () => {
  const { eventData } = useContext(EventDataContext);
  const isEventPage = true;
  const { id } = useParams();
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate('/');
  };

  return (
    <div className='event-details'>
      <Header navigateHandler={navigateHandler} />
      <div className='event'>
        <Card event={eventData[id - 1]} isEventPage={isEventPage} />
      </div>
      <Footer />
    </div>
  );
};

export default EventPage;

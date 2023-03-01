import React from 'react';
import { useEffect, useContext } from 'react';
import { GET_EVENTS_DATA } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import { EventDataContext } from '../../contexts/EventData';
import EventCard from '../EventCard';
import './BodyContent.css';

const BodyContent = () => {
  const { events, setEvents } = useContext(EventDataContext);

  useEffect(() => {
    makeRequest(GET_EVENTS_DATA()).then(response => {
      console.log(response);
      setEvents(response);
    });
  }, []);

  return (
    <div className='body-event-cards'>
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};
export default BodyContent;

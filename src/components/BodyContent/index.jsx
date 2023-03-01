/* eslint-disable no-unused-vars */
import React from 'react';
import { useEffect, useContext } from 'react';
import { GET_EVENTS_DATA } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import { EventDataContext } from '../../contexts/EventData';
import EventCard from '../EventCard';
import './BodyContent.css';
import { useState } from 'react';
import { Theme } from '../../contexts/Theme';
import { GET_THEMES } from '../../constants/apiEndPoints';

const BodyContent = () => {
  const { events, setEvents } = useContext(EventDataContext);
  const [isClicked, setIsClicked] = useState({});
  const { theme, setTheme } = React.useContext(Theme);

  const handleCardClicked = event => {
    setIsClicked(event);
  };

  useEffect(() => {
    makeRequest(GET_EVENTS_DATA()).then(response => {
      console.log(response);
      setEvents(response);
    });
  }, []);

  useEffect(() => {
    makeRequest(GET_THEMES())
      .then(response => {
        console.log(response);
        setTheme({ ...response, currTheme: response['themes'][response['preferredThemeId']].colorHexCode });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  if (isClicked.id) {
    return <EventCard event={isClicked} />;
  } else {
    return (
      <div className='body-event-cards'>
        {events.map(event => (
          <EventCard key={event.id} event={event} handleCardClicked={handleCardClicked} />
        ))}
      </div>
    );
  }
};
export default BodyContent;

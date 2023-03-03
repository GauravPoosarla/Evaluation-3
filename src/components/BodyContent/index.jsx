/* eslint-disable no-unused-vars */
import React from 'react';
import { useEffect, useContext } from 'react';
import { GET_EVENTS_DATA } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import { EventDataContext } from '../../contexts/EventData';
import EventCard from '../EventCard';
import EventCardClicked from '../EventCardClicked';
import './BodyContent.css';
import { useState } from 'react';
import { Theme } from '../../contexts/Theme';
import { GET_THEMES } from '../../constants/apiEndPoints';
import BodyHeader from '../BodyHeader';
import PropTypes from 'prop-types';

const BodyContent = props => {
  const { isClicked, setIsClicked } = props;
  const { events, setEvents } = useContext(EventDataContext);
  const { theme, setTheme } = React.useContext(Theme);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [inputFilter, setInputFilter] = useState('');

  const handleCardClicked = event => {
    setIsClicked(event);
  };

  const handleSearchClicked = () => {
    const filteredEvents = events.filter(event => {
      return event.name.toLowerCase().includes(inputFilter.toLowerCase());
    });
    setFilteredEvents(filteredEvents);
  };

  const handleFilterClicked = event => {
    const input = event.target.value;
    // const filteredEvents = events.filter(event => { // dynamic search
    //   return event.name.toLowerCase().includes(input.toLowerCase());
    // });
    // setFilteredEvents(filteredEvents);
    setInputFilter(input);
  };

  useEffect(() => {
    makeRequest(GET_EVENTS_DATA()).then(response => {
      setEvents(response);
      setFilteredEvents(response);
    });
  }, []);

  useEffect(() => {
    makeRequest(GET_THEMES())
      .then(response => {
        const preferredThemeId = response['preferredThemeId'];
        const currTheme = response.themes.filter(theme => theme.id === preferredThemeId)[0].colorHexCode;
        setTheme({ ...response, currTheme });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  if (isClicked.id) {
    return <EventCardClicked event={isClicked} />;
  } else {
    return (
      <div>
        <BodyHeader handleFilterClicked={handleFilterClicked} handleSearchClicked={handleSearchClicked} />
        <div className='body-event-cards'>
          {filteredEvents.map(event => (
            <EventCard key={event.id} event={event} handleCardClicked={handleCardClicked} />
          ))}
        </div>
      </div>
    );
  }
};

BodyContent.propTypes = {
  isClicked: PropTypes.object,
  setIsClicked: PropTypes.func,
};

export default BodyContent;

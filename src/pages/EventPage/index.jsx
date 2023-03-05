/* eslint-disable no-unused-vars */

import React from 'react';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import { useContext, useState } from 'react';
import { EventDataContext } from '../../contexts/EventData';
import { useParams, useNavigate } from 'react-router';
import './EventPage.css';
import makeRequest from '../../utils/makeRequest';
import { UPDATE_EVENT_DATA } from '../../constants/apiEndPoints';

const EventPage = () => {
  const { eventData } = useContext(EventDataContext);
  const isEventPage = true;
  const { id } = useParams();
  const navigate = useNavigate();
  const [isBookmarked, setIsBookmarked] = useState(eventData[id - 1].isBookmarked);

  const navigateHandler = () => {
    navigate('/');
  };

  const bookmarkHandler = id => {
    makeRequest(UPDATE_EVENT_DATA(id), { data: { isBookmarked: !isBookmarked } }).then(res => {
      setIsBookmarked(!isBookmarked);
    });
  };

  return (
    <div className='event-details'>
      <Header navigateHandler={navigateHandler} />
      <div className='event'>
        <Card
          event={eventData[id - 1]}
          isBookmarked={isBookmarked}
          bookmarkHandler={bookmarkHandler}
          isEventPage={isEventPage}
        />
      </div>
      <Footer />
    </div>
  );
};

export default EventPage;

/* eslint-disable */

import React from 'react';
import { useState } from 'react';
import { faCircleCheck, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { getFormattedDateFromUtcDate } from '../../utils/common';
import './EventCardClicked.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const EventCardClicked = ({ event, handleCardClicked }) => {
  const [isBookmarked, setIsBookmarked] = useState(event.isBookmarked);
  const [isChecked, setIsChecked] = useState(event.isRegistered);

  const bookmarkHandler = () => {
    if (!isBookmarked) {
      axios.patch(`http://localhost:8000/api/events/${event.id}`, { isBookmarked: true }).then(response => {
        setIsBookmarked(!isBookmarked);
      });
    } else {
      axios.patch(`http://localhost:8000/api/events/${event.id}`, { isBookmarked: false }).then(response => {
        setIsBookmarked(!isBookmarked);
      });
    }
  };

  return (
    <div className='event-card-clicked'>
      <div
        className='event-card-image'
        onClick={() => {
          handleCardClicked(event);
        }}>
        <img src={event.imgUrl} alt={event.name} />
      </div>
      <div className='event-card-content'>
        <p className='event-card-content-name'>{event.name}</p>
        <p className='event-card-content-description'>{event.description}</p>
        <p className='event-card-content-venue'>
          <strong>VENUE:</strong> {event.venue}
        </p>
        <p className='event-card-content-date'>
          <strong>DATE: </strong>
          {getFormattedDateFromUtcDate(event.datetime)}
        </p>
      </div>
      <div className='event-card-footer'>
        <FontAwesomeIcon
          icon={faCircleCheck}
          className={event.isChecked ? 'checked' : 'unchecked'}
          onClick={() => setIsChecked(!isChecked)}
        />
        <FontAwesomeIcon
          icon={faBookmark}
          className={event.isBookmarked ? 'bookmarked' : 'unbookmarked'}
          onClick={bookmarkHandler}
        />
      </div>
    </div>
  );
};

export default EventCardClicked;

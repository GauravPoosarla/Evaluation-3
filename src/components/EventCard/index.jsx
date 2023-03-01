/* eslint-disable */
import React from 'react';
import { useState } from 'react';
import { faCircleCheck, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { getFormattedDateFromUtcDate } from '../../utils/common';
import './EventCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
// import makeRequest from '../../utils/makeRequest';
// import { UPDATE_EVENT_DATA } from '../../constants/apiEndPoints';
import axios from 'axios';

const EventCard = ({ event }) => {
  console.log(event.isRegistered);
  const [isBookmarked, setIsBookmarked] = useState(event.isBookmarked);
  const [isChecked, setIsChecked] = useState(event.isRegistered);

  const bookmarkHandler = () => {
    if (!isBookmarked) {
      // makeRequest(
      //   UPDATE_EVENT_DATA(event.id, {
      //     data: { isBookmarked: true },
      //   })
      // ).then(response => {
      //   console.log(response);
      //   setIsBookmarked(!isBookmarked);
      // });
      axios.patch(`http://localhost:8000/api/events/${event.id}`, { isBookmarked: true }).then(response => {
        setIsBookmarked(!isBookmarked);
      });
    } else {
      // makeRequest(UPDATE_EVENT_DATA(event.id, { isBookmarked: false })).then(response => {
      //   console.log(response);
      //   setIsBookmarked(!isBookmarked);
      // });
      axios.patch(`http://localhost:8000/api/events/${event.id}`, { isBookmarked: false }).then(response => {
        setIsBookmarked(!isBookmarked);
      });
    }
  };

  return (
    <div className='event-card'>
      <div className='event-card-image'>
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
          className={isChecked ? 'checked' : 'unchecked'}
          onClick={() => setIsChecked(!isChecked)}
        />
        <FontAwesomeIcon
          icon={faBookmark}
          className={isBookmarked ? 'bookmarked' : 'unbookmarked'}
          onClick={bookmarkHandler}
        />
      </div>
    </div>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    venue: PropTypes.string,
    datetime: PropTypes.string,
    imgUrl: PropTypes.string,
    isRegistered: PropTypes.bool,
    isBookmarked: PropTypes.bool,
  }),
};

export default EventCard;

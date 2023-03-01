/* eslint-disable */
import React from 'react';
import { useState } from 'react';
import { faCircleCheck, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { getFormattedDateFromUtcDate } from '../../utils/common';
import './EventCardClicked.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
// import makeRequest from '../../utils/makeRequest';
// import { UPDATE_EVENT_DATA } from '../../constants/apiEndPoints';
import axios from 'axios';
import { Theme } from '../../contexts/Theme';
import { useContext } from 'react';

const EventCardClicked = ({ event, handleCardClicked }) => {
  const [isBookmarked, setIsBookmarked] = useState(event.isBookmarked);
  const [isChecked, setIsChecked] = useState(event.isRegistered);
  const { theme, setTheme } = useContext(Theme);
  const [result, setResult] = useState('Registered');

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

  const checkHandler = () => {
    if (!isChecked) {
      axios.patch(`http://localhost:8000/api/events/${event.id}`, { isRegistered: true }).then(response => {
        setIsChecked(!isChecked);
      });
    } else {
      axios.patch(`http://localhost:8000/api/events/${event.id}`, { isRegistered: false }).then(response => {
        setIsChecked(!isChecked);
      });
    }
  };

  return (
    <div className='event-card-clicked' style={{ backgroundColor: theme.currTheme }}>
      <div
        className='event-card-image-clicked'
        onClick={() => {
          handleCardClicked(event);
        }}>
        <img src={event.imgUrl} alt={event.name} />
      </div>
      <div className='event-card-content-clicked'>
        <p className='event-card-content-name-clicked'>{event.name}</p>
        <p className='event-card-content-description-clicked'>{event.description}</p>
        <p className='event-card-content-venue-clicked'>
          <strong>VENUE:</strong> {event.venue}
        </p>
        <p className='event-card-content-date-clicked'>
          <strong>DATE: </strong>
          {getFormattedDateFromUtcDate(event.datetime)}
        </p>
      </div>
      <div className='event-card-footer-clicked'>
        <FontAwesomeIcon icon={faCircleCheck} className={isChecked ? 'checked' : 'unchecked'} onClick={checkHandler} />
        {isChecked ? <p>Registered</p> : <p></p>}
        <FontAwesomeIcon
          icon={faBookmark}
          className={isBookmarked ? 'bookmarked' : 'unbookmarked'}
          onClick={bookmarkHandler}
        />
      </div>

      <div className='btn'>
        <button onClick={checkHandler}>{result}</button>
      </div>
    </div>
  );
};

EventCardClicked.propTypes = {
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

export default EventCardClicked;

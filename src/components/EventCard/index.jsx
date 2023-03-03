/* eslint-disable */
import React from 'react';
import { useState } from 'react';
import { faCircleCheck, faBookmark, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { getFormattedDateFromUtcDate } from '../../utils/common';
import './EventCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import makeRequest from '../../utils/makeRequest';
import { UPDATE_EVENT_DATA } from '../../constants/apiEndPoints';
import { Theme } from '../../contexts/Theme';
import { useContext } from 'react';

const EventCard = ({ event, handleCardClicked }) => {
  const [isBookmarked, setIsBookmarked] = useState(event.isBookmarked);
  const [isChecked, setIsChecked] = useState(event.isRegistered);
  const { theme, setTheme } = useContext(Theme);

  const bookmarkHandler = () => {
    if (!isBookmarked) {
      makeRequest(UPDATE_EVENT_DATA(event.id), { data: { isBookmarked: true } }).then(response => {
        setIsBookmarked(!isBookmarked);
      });
    } else {
      makeRequest(UPDATE_EVENT_DATA(event.id), { data: { isBookmarked: false } }).then(response => {
        setIsBookmarked(!isBookmarked);
      });
    }
    window.location.reload();
  };

  const checkHandler = () => {
    if (!isChecked) {
      makeRequest(UPDATE_EVENT_DATA(event.id), { data: { isRegistered: true } }).then(response => {
        setIsChecked(!isChecked);
      });
    } else {
      makeRequest(UPDATE_EVENT_DATA(event.id), { data: { isRegistered: false } }).then(response => {
        setIsChecked(!isChecked);
      });
    }
    window.location.reload();
  };

  return (
    <div className='event-card' style={{ backgroundColor: theme.currTheme }}>
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
        {event.areSeatsAvailable ? (
          <FontAwesomeIcon icon={faCircleCheck} className={isChecked ? 'checked' : ''} onClick={checkHandler} />
        ) : (
          <FontAwesomeIcon icon={faXmarkCircle} className='unavailable' />
        )}
        {isChecked ? (
          <p className={'event-card-registration'} style={{ color: 'green' }}>
            Registered
          </p>
        ) : (
          <p></p>
        )}
        {event.areSeatsAvailable ? <p></p> : <p style={{ color: 'yellow' }}>Seats Unavailable</p>}
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

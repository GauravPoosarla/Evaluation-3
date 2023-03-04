/* eslint-disable */
import React from 'react';
import { useState } from 'react';
import { getFormattedDateFromUtcDate } from '../../utils/common';
import './Card.css';
import PropTypes from 'prop-types';
import makeRequest from '../../utils/makeRequest';
import { UPDATE_EVENT_DATA } from '../../constants/apiEndPoints';

const Card = ({ event }) => {
  const [isBookmarked, setIsBookmarked] = useState(event.isBookmarked);
  const [isChecked, setIsChecked] = useState(event.isRegistered);

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
    // window.location.reload();
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
    // window.location.reload();
  };

  return (
    <div className='event-card' style={{ backgroundColor: 'black' }}>
      <div
        className='event-card-image'
        onClick={() => {
          console.log('clicked');
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
        {!event.areSeatsAvailable ? (
          <i className={'fa-solid fa-circle-xmark'} style={{ color: 'yellow' }} onClick={checkHandler} />
        ) : (
          ''
        )}
        {event.isRegistered ? (
          <div className='registered'>
            <i className={'fa-solid fa-circle-check'} onClick={checkHandler} />
            <p className={'event-card-registration'} style={{ color: 'green' }}>
              Registered
            </p>
          </div>
        ) : (
          <p></p>
        )}
        {event.areSeatsAvailable ? <p></p> : <p style={{ color: 'yellow' }}>Seats Unavailable</p>}
        <i className={isBookmarked ? 'fa-solid fa-bookmark' : 'fa-regular fa-bookmark'} onClick={bookmarkHandler} />
      </div>
    </div>
  );
};

Card.propTypes = {
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

export default Card;

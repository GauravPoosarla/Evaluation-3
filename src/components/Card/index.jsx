/* eslint-disable */
import React from 'react';
import { useState } from 'react';
import './Card.css';
import PropTypes from 'prop-types';
import { Theme } from '../../contexts/Theme';

const Card = ({ event, bookmarkHandler }) => {
  const date = new Date(event.datetime);
  // include timezone in date
  const localDate = date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  const { theme } = React.useContext(Theme);
  const { currTheme } = theme;

  return (
    <div className='event-card' style={{ backgroundColor: currTheme }}>
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
          {localDate}
        </p>
      </div>
      <div className='event-card-footer'>
        {!event.areSeatsAvailable ? <i className={'fa-solid fa-circle-xmark'} style={{ color: 'yellow' }} /> : ''}
        {event.isRegistered ? (
          <div className='registered'>
            <i className={'fa-solid fa-circle-check'} />
            <p className={'event-card-registration'} style={{ color: 'green', fontSize: 15 }}>
              Registered
            </p>
          </div>
        ) : (
          <p></p>
        )}
        {event.areSeatsAvailable ? <p></p> : <p style={{ color: 'yellow', fontSize: 15 }}>No Seats Available</p>}
        <i
          className={event.isBookmarked ? 'fa-solid fa-bookmark' : 'fa-regular fa-bookmark'}
          style={{ color: 'orange' }}
          onClick={() => {
            bookmarkHandler(event.id);
          }}
        />
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

/* eslint-disable no-unused-vars */

import React from 'react';
import { useState, useContext, useEffect } from 'react';
import Card from '../Card';
import { EventDataContext } from '../../contexts/EventData';
import makeRequest from '../../utils/makeRequest';
import { GET_EVENTS_DATA } from '../../constants/apiEndPoints';

import './Body.css';

const Body = () => {
  const [filterClicked, setFilterClicked] = useState(false);
  const { eventData, setEventData } = useContext(EventDataContext);
  const [eventDataState, setEventDataState] = useState([]);

  useEffect(() => {
    makeRequest(GET_EVENTS_DATA()).then(response => {
      setEventData(response);
      setEventDataState(response);
    });
  }, []);

  const filterClickHandler = () => {
    setFilterClicked(!filterClicked);
  };

  const radioButtonHandler = event => {
    if (event.target.value === 'all') {
      setEventDataState(eventData);
    } else if (event.target.value === 'Registered') {
      setEventDataState(eventData.filter(event => event.isRegistered));
    } else if (event.target.value === 'Bookmarked') {
      setEventDataState(eventData.filter(event => event.isBookmarked));
    } else if (event.target.value === 'Seats Available') {
      setEventDataState(eventData.filter(event => event.areSeatsAvailable));
    }
  };

  return (
    <div className='body'>
      <div className='body-header'>
        <div className='body-header-left'>
          <i className='fa-solid fa-filter'> </i>
          <p>FILTER</p>
          {filterClicked && <i className='fa-solid fa-chevron-up' onClick={filterClickHandler}></i>}
          {!filterClicked && <i className='fa-solid fa-chevron-down' onClick={filterClickHandler}></i>}
        </div>
        <div className='body-header-right'>
          <input className='search' type='text' placeholder='Event Name' />
          <i className='fa-solid fa-search'></i>
        </div>
      </div>
      <div className='body-filter'>
        {filterClicked && (
          <div className='body-filter-content'>
            <div className='body-filter-content-radio'>
              <div className='body-filter-content-radio-value'>
                <input type='radio' name='filter' value='all' defaultChecked onClick={radioButtonHandler} />
                <label htmlFor='all'> All</label>
              </div>
              <div className='body-filter-content-radio-value'>
                <label htmlFor='registered'>Registered </label>
                <input type='radio' name='filter' value='Registered' onClick={radioButtonHandler} />
              </div>
            </div>
            <div className='body-filter-content-radio'>
              <div className='body-filter-content-radio-value'>
                <input type='radio' name='filter' value='Bookmarked' onClick={radioButtonHandler} />
                <label htmlFor='bookmarked'> Bookmarked</label>
              </div>
              <div className='body-filter-content-radio-value'>
                <label htmlFor='seats-available'>Seats Available </label>
                <input type='radio' name='filter' value='Seats Available' onClick={radioButtonHandler} />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className='body-content'>
        {eventDataState.map(event => (
          <Card key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};
export default Body;
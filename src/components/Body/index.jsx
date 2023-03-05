/* eslint-disable no-unused-vars */

import React from 'react';
import { useState, useContext, useEffect } from 'react';
import Card from '../Card';
import { EventDataContext } from '../../contexts/EventData';
import makeRequest from '../../utils/makeRequest';
import { GET_EVENTS_DATA, UPDATE_EVENT_DATA } from '../../constants/apiEndPoints';
import { Theme } from '../../contexts/Theme';
import './Body.css';

const Body = () => {
  const [isRegistered, setIsRegistered] = useState({});
  const [isBookmarked, setIsBookmarked] = useState({});

  const [input, setInput] = useState('');
  const [searchClicked, setSearchClicked] = useState(false);

  const [filterClicked, setFilterClicked] = useState(false);
  const { eventData, setEventData } = useContext(EventDataContext);
  const [eventDataState, setEventDataState] = useState([]);

  const { theme } = useContext(Theme);
  const { currTheme } = theme;

  useEffect(() => {
    makeRequest(GET_EVENTS_DATA()).then(response => {
      response.sort((a, b) => {
        return new Date(a.datetime) - new Date(b.datetime);
      });
      setEventData(response);
      setEventDataState(response);
    });
  }, []);

  const inputHandler = event => {
    setInput(event.target.value);
  };

  const searchHandler = () => {
    if (input.trim() === '') {
      setEventDataState(eventData);
      return;
    }
    setEventDataState(eventData.filter(event => event.name.toLowerCase().includes(input.toLowerCase())));
  };

  for (let i = 0; i < eventData.length; i++) {
    isRegistered[eventData[i].id] = eventData[i].isRegistered;
    isBookmarked[eventData[i].id] = eventData[i].isBookmarked;
  }

  const bookmarkHandler = id => {
    makeRequest(UPDATE_EVENT_DATA(id), { data: { isBookmarked: !isBookmarked[id] } }).then(response => {
      const duplicateBookmarked = { ...isBookmarked };
      duplicateBookmarked[id] = !duplicateBookmarked[id];
      setIsBookmarked(duplicateBookmarked);

      const duplicateEventData = [...eventData];
      for (let i = 0; i < duplicateEventData.length; i++) {
        if (duplicateEventData[i].id === id) {
          duplicateEventData[i].isBookmarked = duplicateBookmarked[id];
        }
      }
      setEventData(duplicateEventData);
    });
  };

  const filterClickHandler = () => {
    setFilterClicked(!filterClicked);
  };

  const radioButtonHandler = event => {
    if (event.target.value === 'all') {
      setEventDataState(eventData);
    } else if (event.target.value === 'Registered') {
      setEventDataState(eventDataState.filter(event => event.isRegistered));
    } else if (event.target.value === 'Bookmarked') {
      setEventDataState(eventDataState.filter(event => event.isBookmarked));
    } else if (event.target.value === 'Seats Available') {
      setEventDataState(eventDataState.filter(event => event.areSeatsAvailable));
    }
  };

  return (
    <div className='body'>
      <div className='body-header' style={{ color: currTheme }}>
        <div className='body-header-left'>
          <i className='fa-solid fa-filter'> </i>
          <p>FILTER</p>
          {filterClicked && <i className='fa-solid fa-chevron-up' onClick={filterClickHandler}></i>}
          {!filterClicked && <i className='fa-solid fa-chevron-down' onClick={filterClickHandler}></i>}
        </div>
        <div className='body-header-right'>
          <input className='search' type='text' placeholder='Event Name' onChange={inputHandler} />
          <i className='fa-solid fa-search' onClick={searchHandler}></i>
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
          <Card key={event.id} event={event} bookmarkHandler={bookmarkHandler} />
        ))}
      </div>
    </div>
  );
};
export default Body;

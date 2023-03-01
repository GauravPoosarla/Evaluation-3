import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faChevronUp, faMagnifyingGlass, faCircle, faCircleDot } from '@fortawesome/free-solid-svg-icons';
import './BodyHeader.css';

const BodyHeader = () => (
  <div className='body'>
    <div className='body-header'>
      <div className='filter'>
        <span className='filter-content'>
          <FontAwesomeIcon icon={faFilter} />
          <span> Filter </span>
          <FontAwesomeIcon icon={faChevronUp} />
        </span>
      </div>
      <div className='search'>
        <div className='search-header'>
          <input type='text' placeholder='Event Name' />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
    </div>
    <div className='filter-buttons'>
      <div className='filter-buttons-level'>
        <div className='filter-buttons-content'>
          <FontAwesomeIcon icon={faCircleDot} />
          <p>All</p>
        </div>
        <div className='filter-buttons-content'>
          <p>Bookmarked</p>
          <FontAwesomeIcon icon={faCircle} />
        </div>
      </div>
      <div className='filter-buttons-level'>
        <div className='filter-buttons-content'>
          <FontAwesomeIcon icon={faCircle} />
          <p> Registered </p>
        </div>
        <div className='filter-buttons-content'>
          <p> Seats Available </p>
          <FontAwesomeIcon icon={faCircle} />
        </div>
      </div>
    </div>
  </div>
);

export default BodyHeader;

/* eslint-disable no-unused-vars */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faChevronUp, faMagnifyingGlass, faCircle, faCircleDot } from '@fortawesome/free-solid-svg-icons';
import './BodyHeader.css';
import PropTypes from 'prop-types';

const BodyHeader = props => {
  const { handleFilterClicked, handleSearchClicked, radioFilter } = props;

  return (
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
            <input type='text' placeholder='Event Name' onChange={handleFilterClicked} />
            <FontAwesomeIcon icon={faMagnifyingGlass} onClick={handleSearchClicked} />
          </div>
        </div>
      </div>
      <div className='filter-buttons'>
        <div className='filter-buttons-level'>
          <div>
            <input type='radio' name='filter' value='all' onChange={radioFilter} defaultChecked />
            <span>All</span>
          </div>
          <div>
            <span>Bookmarked</span>
            <input type='radio' name='filter' value='bookmarked' onChange={radioFilter} />
          </div>
        </div>
        <div className='filter-buttons-level'>
          <div>
            <input type='radio' name='filter' value='registered' onChange={radioFilter} />
            <span>Registered</span>
          </div>
          <div>
            <span>Seat Available</span>
            <input type='radio' name='filter' value='seat-available' onChange={radioFilter} />
          </div>
        </div>
      </div>
    </div>
  );
};

BodyHeader.propTypes = {
  handleFilterClicked: PropTypes.func.isRequired,
  handleSearchClicked: PropTypes.func.isRequired,
  radioFilter: PropTypes.func.isRequired,
};

export default BodyHeader;

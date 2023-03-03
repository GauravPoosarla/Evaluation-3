import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faChevronUp, faMagnifyingGlass, faCircle, faCircleDot } from '@fortawesome/free-solid-svg-icons';
import './BodyHeader.css';
import PropTypes from 'prop-types';

const BodyHeader = props => {
  const { handleFilterClicked, handleSearchClicked } = props;

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
};

BodyHeader.propTypes = {
  handleFilterClicked: PropTypes.func.isRequired,
  handleSearchClicked: PropTypes.func.isRequired,
};

export default BodyHeader;

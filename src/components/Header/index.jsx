/* eslint-disable no-unused-vars */

import React from 'react';
import './Header.css';
import { Theme } from '../../contexts/Theme';
import { useContext } from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  const { setIsClicked } = props;
  const { theme, setTheme } = useContext(Theme);

  const clickHandler = () => {
    setIsClicked({});
  };

  return (
    <div className='header' style={{ backgroundColor: theme.currTheme }} onClick={clickHandler}>
      <h1>EVENTIFY</h1>
    </div>
  );
};

Header.propTypes = {
  setIsClicked: PropTypes.func,
};

export default Header;

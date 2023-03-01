/* eslint-disable no-unused-vars */

import React from 'react';
import './Header.css';
import { Theme } from '../../contexts/Theme';
import { useContext } from 'react';

const Header = () => {
  const { theme, setTheme } = useContext(Theme);
  return (
    <div className='header' style={{ backgroundColor: theme.currTheme }}>
      <h1>EVENTIFY</h1>
    </div>
  );
};

export default Header;

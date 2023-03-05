import React from 'react';
import { Theme } from '../../contexts/Theme';
import './Header.css';

const Header = () => {
  const { theme } = React.useContext(Theme);
  return (
    <div className='header' style={{ backgroundColor: theme.currTheme }}>
      <h1>EVENTIFY</h1>
    </div>
  );
};

export default Header;

import React from 'react';
import { Theme } from '../../contexts/Theme';
import './Header.css';
import PropTypes from 'prop-types';

const Header = props => {
  const { navigateHandler } = props;
  const { theme } = React.useContext(Theme);
  return (
    <div className='header' style={{ backgroundColor: theme.currTheme }} onClick={navigateHandler}>
      <h1>EVENTIFY</h1>
    </div>
  );
};

Header.propTypes = {
  navigateHandler: PropTypes.func,
};

export default Header;

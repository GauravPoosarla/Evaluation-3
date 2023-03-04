import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import PropTypes from 'prop-types';

export const EventDataContext = createContext();
export const EventDataProvider = ({ children }) => {
  const [eventData, setEventData] = useState([]);

  return <EventDataContext.Provider value={{ eventData, setEventData }}>{children}</EventDataContext.Provider>;
};

EventDataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

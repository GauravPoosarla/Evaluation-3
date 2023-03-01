/* eslint-disable */

import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';

export const EventDataContext = createContext({});

export const EventDataProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  return <EventDataContext.Provider value={{ events, setEvents }}>{children}</EventDataContext.Provider>;
};

export default EventDataProvider;

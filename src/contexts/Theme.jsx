/* eslint-disable react/prop-types */

import React from 'react';
export const Theme = React.createContext({});
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState({});
  return <Theme.Provider value={{ theme, setTheme }}>{children}</Theme.Provider>;
};

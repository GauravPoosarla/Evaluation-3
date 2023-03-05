/* eslint-disable no-unused-vars */

import React from 'react';
import Header from '../../components/Header';
import Body from '../../components/Body';
import Footer from '../../components/Footer';
import makeRequest from '../../utils/makeRequest';
import { GET_THEMES } from '../../constants/apiEndPoints';
import { Theme } from '../../contexts/Theme';

const Homepage = () => {
  const { theme, setTheme } = React.useContext(Theme);

  React.useEffect(() => {
    makeRequest(GET_THEMES())
      .then(response => {
        const preferredThemeId = response['preferredThemeId'];
        const currTheme = response.themes.filter(theme => theme.id === preferredThemeId)[0].colorHexCode;

        setTheme({ ...response, currTheme });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className='Homepage'>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Homepage;

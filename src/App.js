/* eslint-disable no-unused-vars */

import React from 'react';
import Header from './components/Header';
import BodyHeader from './components/BodyHeader';
import BodyContent from './components/BodyContent';
import Footer from './components/Footer';
import { Theme } from './contexts/Theme';
import { GET_THEMES } from './constants/apiEndPoints';
import makeRequest from './utils/makeRequest';

import './App.css';
function App() {
  const { theme, setTheme } = React.useContext(Theme);
  React.useEffect(() => {
    makeRequest(GET_THEMES())
      .then(response => {
        console.log(response);
        setTheme({ ...response, currTheme: response['themes'][response['preferredThemeId']].colorHexCode });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <div className='App'>
      <Header />
      <BodyHeader />
      <BodyContent />
      <Footer />
    </div>
  );
}

export default App;

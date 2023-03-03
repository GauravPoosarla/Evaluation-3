/* eslint-disable no-unused-vars */

import React, { useEffect } from 'react';
import Header from './components/Header';
import BodyContent from './components/BodyContent';
import Footer from './components/Footer';
import { useState } from 'react';

import './App.css';
function App() {
  const [isClicked, setIsClicked] = useState({});
  return (
    <div className='App'>
      <Header setIsClicked={setIsClicked} />
      <BodyContent isClicked={isClicked} setIsClicked={setIsClicked} />
      <Footer />
    </div>
  );
}

export default App;

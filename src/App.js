/* eslint-disable no-unused-vars */

import React from 'react';
import Header from './components/Header';
import BodyHeader from './components/BodyHeader';
import BodyContent from './components/BodyContent';
import Footer from './components/Footer';

import './App.css';
function App() {
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

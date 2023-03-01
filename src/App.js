import React from 'react';
import Header from './components/Header';
import BodyHeader from './components/BodyHeader';
import BodyContent from './components/BodyContent';

import './App.css';
function App() {
  return (
    <div className='App'>
      <Header />
      <BodyHeader />
      <BodyContent />
    </div>
  );
}

export default App;

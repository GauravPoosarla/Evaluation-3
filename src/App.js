import React from 'react';
import Homepage from './pages/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EventDataProvider } from './contexts/EventData';
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <EventDataProvider>
                {' '}
                <Homepage />
              </EventDataProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

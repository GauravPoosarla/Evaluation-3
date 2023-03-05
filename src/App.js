import React from 'react';
import Homepage from './pages/Homepage';
import EventPage from './pages/EventPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EventDataProvider } from './contexts/EventData';
import { ThemeProvider } from './contexts/Theme';
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <ThemeProvider>
                <EventDataProvider>
                  <Homepage />
                </EventDataProvider>
              </ThemeProvider>
            }
          />
          <Route
            path='/events/:id'
            element={
              <ThemeProvider>
                <EventDataProvider>
                  <EventPage />
                </EventDataProvider>
              </ThemeProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

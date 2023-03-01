import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { EventDataProvider } from './contexts/EventData';
import { ThemeProvider } from './contexts/Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <EventDataProvider>
        <App />
      </EventDataProvider>
    </ThemeProvider>
  </React.StrictMode>
);

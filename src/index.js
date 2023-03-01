import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { EventDataProvider } from './contexts/EventData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EventDataProvider>
      <App />
    </EventDataProvider>
  </React.StrictMode>
);

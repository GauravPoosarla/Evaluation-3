export const BACKEND_URL = 'http://localhost:8000';

export const GET_EVENTS_DATA = () => ({
  url: `${BACKEND_URL}/api/events`,
  method: 'GET',
});

export const GET_EVENT_DATA = id => ({
  url: `${BACKEND_URL}/api/events/${id}`,
  method: 'GET',
});

export const UPDATE_EVENT_DATA = id => ({
  url: `${BACKEND_URL}/api/events/${id}`,
  method: 'PATCH',
});

export const GET_THEMES = () => ({
  url: `${BACKEND_URL}/api/themes`,
  method: 'GET',
});

export const PUT_THEME = () => ({
  url: `${BACKEND_URL}/api/themes`,
  method: 'PUT',
});

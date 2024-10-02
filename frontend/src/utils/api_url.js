export const API_BASE_URL =
  process.env.NODE_ENV === 'development'
    ? ''  // Use proxy in development
    : process.env.REACT_APP_API_URL;  // Use production URL

    
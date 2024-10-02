export const API_BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000'  // Use proxy in development
    : 'https://cozy-threads-ngio.onrender.com';  // Use production URL

import React, { StrictMode } from 'react'; // Import StrictMode here
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx';
import './HeroSection/Hero.css';

// Replace these with your actual Auth0 domain and client ID
const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    scope='openid profile email'
    >
      <App />
    </Auth0Provider>
  </StrictMode>
);

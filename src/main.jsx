import React from 'react'; 
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx';
import './HeroSection/Hero.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-qz7a5av7sksmr4qs.us.auth0.com"
      clientId="ua319xDQDqXc0aiJXQjdAyYw2wFmO20A"
      authorizationParams={{
        redirect_uri:"http://localhost:5173"
      }}
    scope='openid profile email'
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);


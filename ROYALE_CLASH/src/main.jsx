import './index.css';
import './assets/fonts/SVN-Supercell Magic.otf';
import { ProviderLanguage } from './context/LanguagesContext';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { UserContextProvider } from './context/UserContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <ProviderLanguage>
          <App />
        </ProviderLanguage>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

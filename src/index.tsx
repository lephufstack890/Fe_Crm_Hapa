/// <reference types="vite/client" />
import './index.css';

import '@lib/i18n/configure';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();

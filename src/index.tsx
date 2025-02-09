/// <reference types="vite/client" />
import './index.css';

import '@lib/i18n/configure';
import App from './app/App';
import { store } from './app/store';
import reportWebVitals from './reportWebVitals';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();

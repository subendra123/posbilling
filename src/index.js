import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';

import 'remixicon/fonts/remixicon.css'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  </BrowserRouter>
 
);



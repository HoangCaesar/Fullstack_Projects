import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CssBaseLine from '@mui/material/CssBaseline';
import { store } from './app/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseLine />
      <App />
    </Provider>
  </React.StrictMode>
);

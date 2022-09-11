import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CssBaseLine from '@mui/material/CssBaseline';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <CssBaseLine />
                <App />
            </Router>
        </Provider>
    </React.StrictMode>
);

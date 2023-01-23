import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

// redux provider
// import { Provider as ReduxProvider } from 'react-redux';

// ==============================|| MAIN - REACT DOM RENDER  ||============================== //

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
        <Router>
            <App />
        </Router>
);

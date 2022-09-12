import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CssBaseLine from '@mui/material/CssBaseline';
import { CustomRouter } from './hooks/CustomRouter'
import { store } from './app/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <CustomRouter>
                <CssBaseLine />
                <App />
            </CustomRouter>
        </Provider>
    </React.StrictMode>
);

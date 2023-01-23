import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

// redux provider
import { Provider as ReduxProvider } from 'react-redux';

// scroll bar
import 'simplebar/dist/simplebar.css';

// project import
import App from './App';
import { store } from './store';

// ==============================|| MAIN - REACT DOM RENDER  ||============================== //

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ReduxProvider store={store}>
        <Router>
            <App />
        </Router>
    </ReduxProvider>
);

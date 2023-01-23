// StyleS
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// project import
import ThemeCustomization from './themes/ThemeCustomization';
import { ScrollTop } from './components';
import Routes from './routes';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

function App() {
    return (
        <ThemeCustomization>
            <ScrollTop>
                <Routes />
            </ScrollTop>
        </ThemeCustomization>
    );
}

export default App;

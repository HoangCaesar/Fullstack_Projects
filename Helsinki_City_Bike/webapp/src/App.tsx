// StyleS
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// project import
import ThemeCustomization from './themes/ThemeCustomization';
import { ScrollTop } from './components';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

function App() {
    return (
        <ThemeCustomization>
            <ScrollTop>
                <div>hello</div>
            </ScrollTop>
        </ThemeCustomization>
    );
}

export default App;

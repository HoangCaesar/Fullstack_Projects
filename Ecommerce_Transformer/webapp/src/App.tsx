import { useState } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Home from './features/home/pages/Home';
import Signin from './features/signin/pages/Signin';
import TermsOfUse from './features/terms-policy/PrivacyPolicy';
import User from './features/user/pages/User';
import './App.scss';

function App() {
    return (
        <div className="App">
            {/* <Home /> */}
            {/* <Signin /> */}
            {/* <TermsOfUse heading={"Policy"} /> */}
            <User />
        </div>
    );
}

export default App;

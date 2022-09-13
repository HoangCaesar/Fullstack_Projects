import { useState } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Home from './features/home/pages/Home';
import Auth from './features/authentication/pages/Auth';
import TermsOfUse from './features/terms-policy/PrivacyPolicy';
import User from './features/user/pages/User';
import Notify from './features/notify-page/Notify';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth">
                <Route path="login" element={<Auth />} />
                <Route path="register" element={<Auth />} />
            </Route>
            <Route path="/legal">
                <Route path="policy" element={<TermsOfUse />} />
                <Route path="terms" element={<TermsOfUse/>} />
            </Route>
            <Route path="/user" element={<User />} />
            <Route path="/notify/registered" element={<Notify />} />
        </Routes>
    );
}

export default App;

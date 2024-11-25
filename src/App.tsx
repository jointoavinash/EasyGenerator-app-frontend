import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Welcome from './components/Welcome';

const App: React.FC = () => (
    <Router>
        <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/welcome" element={<Welcome />} />
        </Routes>
    </Router>
);

export default App;
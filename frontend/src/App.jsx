// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LandingPage from './pages/LandingPage';
import AdminDashboard from './pages/AdminDashboard';


function App() {
  const { isAuthenticated, user } = useAuth0();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={isAuthenticated && user.email === import.meta.env.VITE_ADMIN_EMAIL ? <AdminDashboard /> : <LandingPage/>} />
        <Route path="/exams" element={<div>Exams Page</div>} /> {/* Placeholder for now */}
        <Route path="/test-series" element={<div>Test Series Page</div>} /> {/* Placeholder for now */}
        <Route path="/quizzes" element={<div>Quizzes Page</div>} /> {/* Placeholder for now */}
        <Route path="/news" element={<div>News Page</div>} /> {/* Placeholder for now */}
      </Routes>
    </Router>
  );
}

export default App;

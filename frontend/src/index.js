import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

// Routes
import Home from './pages/home.js';
import Support from './pages/support.js';
import Member from './pages/member.js';
import Release from './pages/release.js';

function Index() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route path="/member" element={<Member />} />
        <Route path="/release" element={<Release />} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  <React.StrictMode>
  <Index />
</React.StrictMode>);

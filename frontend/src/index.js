import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

// Routes
import Home from './pages/home.js';
import Support from './pages/support.js';
import Member from './pages/member.js';
import Release from './pages/release.js';
import Adopt from './pages/adopt.js';
import Review from './pages/review.js'

// Data
import petList from './data/pets.js';

function Index() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route path="/member" element={<Member />} />
        <Route path="/release" element={<Release />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </Router>
  );
}

localStorage.setItem('pets', JSON.stringify(petList));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);

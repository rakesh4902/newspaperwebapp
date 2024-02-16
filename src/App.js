import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ArticleDetails from './components/ArticleDetails';
import ArticleBrowse from './components/ArticleBrowse';

const App = () => (
  <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<ArticleBrowse />} />
        <Route path="/article/:id" element={<ArticleDetails />} />
      </Routes>
    </div>
  </Router>
);

export default App;

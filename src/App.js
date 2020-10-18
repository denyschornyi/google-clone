import React from 'react';
import './App.css';

import Home from './pages/Home';

function App() {
  return (
    <div className="app">
      <h1>I will get a job in this month</h1>

      {/* Home (with search) */}

      <Home />

      {/* Search page (The results page) */}
    </div>
  );
}

export default App;

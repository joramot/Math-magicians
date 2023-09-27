import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quotes from './components/logic/Quotes';

function App() {
  return (
    <div className="App">
      <nav>
        <div>
          <h1> Math Magicians </h1>
        </div>
        <div className="nav-styles">
          <p><Link style={{ textDecoration: 'none' }} to="/">Home</Link></p>
          <p><Link style={{ textDecoration: 'none' }} to="/calculator">Calculator</Link></p>
          <p><Link style={{ textDecoration: 'none' }} to="/quotes">Quotes</Link></p>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Calculator />} />
        <Route path="/" element={<Quotes />} />
      </Routes>
    </div>
  );
}

export default App;

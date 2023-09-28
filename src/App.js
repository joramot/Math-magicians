import './App.css';
import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
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
        <div className="">
          <p><Link to="/">Home</Link></p>
          <p><Link to="/calculator">Calculator</Link></p>
          <p><Link to="/quotes">Quotes</Link></p>
        </div>
      </nav>
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<Quotes />} />
      </Router>
    </div>
  );
}

export default App;

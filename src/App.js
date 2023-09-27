import './App.css';
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
          <p>Home</p>
          <p>Calculator</p>
          <p>Quotes</p>
        </div>
      </nav>
      <Home />
      <Quotes />
      <Calculator />
    </div>
  );
}

export default App;

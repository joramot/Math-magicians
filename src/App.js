import './App.css';
import Calculator from './components/Calculator';
import Quotes from './components/logic/Quotes';

function App() {
  return (
    <div className="App">
      <Quotes />
      <Calculator />
    </div>
  );
}

export default App;

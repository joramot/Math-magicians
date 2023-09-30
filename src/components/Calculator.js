import { useState } from 'react';
import calculate from './logic/calculate';

const Calculator = () => {
  const [inputObject, setInputObject] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const type = (buttonName) => {
    const output = calculate(inputObject, buttonName);
    setInputObject({
      total: output.total,
      next: output.next,
      operation: output.operation,
    });
  };

  return (
    <div>
      <div className="calculator-container">
        <div className="calc-heading">
          <h2>Let&apos;s do some Math!</h2>
        </div>
        <div className="calculator-grid">
          <input className="screen" placeholder="0" value={`${inputObject.total ? inputObject.total : ''}${inputObject.operation ? inputObject.operation : ''}${inputObject.next ? inputObject.next : ''}`} />
          <div className="buttons-grid">
            <div className="row">
              <button type="button" onClick={() => type('AC')}>AC</button>
              <button type="button" onClick={() => type('+/-')}>+/-</button>
              <button type="button" onClick={() => type(' % ')}>%</button>
              <button className="orange" type="button" onClick={() => type(' ÷ ')}>÷</button>
            </div>
            <div className="row">
              <button type="button" onClick={() => type('7')}>7</button>
              <button type="button" onClick={() => type('8')}>8</button>
              <button type="button" onClick={() => type('9')}>9</button>
              <button className="orange" type="button" onClick={() => type(' x ')}>x</button>
            </div>
            <div className="row">
              <button type="button" onClick={() => type('4')}>4</button>
              <button type="button" onClick={() => type('5')}>5</button>
              <button type="button" onClick={() => type('6')}>6</button>
              <button className="orange" type="button" onClick={() => type(' - ')}>-</button>
            </div>
            <div className="row">
              <button type="button" onClick={() => type('1')}>1</button>
              <button type="button" onClick={() => type('2')}>2</button>
              <button type="button" onClick={() => type('3')}>3</button>
              <button className="orange" type="button" onClick={() => type(' + ')}>+</button>
            </div>
            <div className="row">
              <button type="button" id="zero" onClick={() => type('0')}>0</button>
              <button type="button" onClick={() => type('.')}>.</button>
              <button className="orange" type="button" onClick={() => type('=')}>=</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

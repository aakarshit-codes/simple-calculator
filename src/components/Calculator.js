import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [input, setInput] = useState('');
    
    /* Clear the input display */
    const handleClear = () => setInput('');

    /* Append the clicked button value to the input */
    const handleClick = (value) => setInput(input + value);

    const handleEqual = () => {
        try {
            /* evaluate mathematical expression */
            setInput(eval(input)); 
        } catch {
            /* Handle invalid expressions */
            setInput("Error");  
        }
    };

    return (
    <div className='calculator'>
        <div className='display'>{input || "0"}</div>
        <div className='buttons'>
            <button onClick={handleClear}>C</button>
            <button onClick={() => handleClick('/')}>/</button>
            <button onClick={() => handleClick('*')}>*</button>
            <button onClick={() => handleClick('-')}>-</button>
            <button onClick={() => handleClick('7')}>7</button>
            <button onClick={() => handleClick('8')}>8</button>
            <button onClick={() => handleClick('9')}>9</button>
            <button onClick={() => handleClick('+')}>+</button>
            <button onClick={() => handleClick('4')}>4</button>
            <button onClick={() => handleClick('5')}>5</button>
            <button onClick={() => handleClick('6')}>6</button>
            <button onClick={handleEqual}>=</button>
            <button onClick={() => handleClick('1')}>1</button>
            <button onClick={() => handleClick('2')}>2</button>
            <button onClick={() => handleClick('3')}>3</button>
            <button onClick={() => handleClick('0')}>0</button>
        </div>
    </div>
    );
};

export default Calculator;
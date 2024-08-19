import React, { useState } from 'react';
import './Calculator.css';
import Viewer from './Viewer';
import Button from './Button';

const Calculator = () => {
    const [result, setResult] = useState('');
    const [operator, setOperator] = useState('');
    const [numOne, setNumOne] = useState('');
    const [numTwo, setNumTwo] = useState('');

    const onClickButton = (value) => {
        if (operator) {
            setNumTwo((prev) => prev + value);
            setResult((prev) => (prev === numOne ? value : prev + value));
        } else {
            setNumOne((prev) => prev + value);
            setResult((prev) => prev + value);
        }
    };

    const onClickOperator = (op) => {
        if (numOne !== '') {
            if (operator === '') {
                setOperator(op);
                setResult('');
            } else {
                calculate();
                setOperator(op);
            }
        } else {
            alert('숫자를 입력하세요');
        }
    };

    const calculate = () => {
        if (numTwo) {
            let calculatedResult;
            switch (operator) {
                case '+':
                    calculatedResult = parseInt(numOne) + parseInt(numTwo);
                    break;
                case '-':
                    calculatedResult = parseInt(numOne) - parseInt(numTwo);
                    break;
                case '*':
                    calculatedResult = parseInt(numOne) * parseInt(numTwo);
                    break;
                case '/':
                    calculatedResult = parseInt(numOne) / parseInt(numTwo);
                    break;
                default:
                    return;
            }
            setResult(calculatedResult.toString());
            setNumOne(calculatedResult.toString());
            setNumTwo('');
        } else {
            alert('숫자를 먼저 입력하세요.');
        }
    };

    const clear = () => {
        setResult('');
        setOperator('');
        setNumOne('');
        setNumTwo('');
    };

    return (
        <div className="calculator">
            <Viewer operator={operator} result={result} />
            <Button
                onClickButton={onClickButton}
                onClickOperator={onClickOperator}
                calculate={calculate}
                clear={clear}
            />
        </div>
    );
};

export default Calculator;

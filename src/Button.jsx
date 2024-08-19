const Button = ({ onClickButton, onClickOperator, calculate, clear }) => {
    return (
        <div>
            <div className="row">
                <button onClick={() => onClickButton('7')}>7</button>
                <button onClick={() => onClickButton('8')}>8</button>
                <button onClick={() => onClickButton('9')}>9</button>
                <button onClick={() => onClickOperator('+')}>+</button>
            </div>
            <div className="row">
                <button onClick={() => onClickButton('4')}>4</button>
                <button onClick={() => onClickButton('5')}>5</button>
                <button onClick={() => onClickButton('6')}>6</button>
                <button onClick={() => onClickOperator('-')}>-</button>
            </div>
            <div className="row">
                <button onClick={() => onClickButton('1')}>1</button>
                <button onClick={() => onClickButton('2')}>2</button>
                <button onClick={() => onClickButton('3')}>3</button>
                <button onClick={() => onClickOperator('/')}>/</button>
            </div>
            <div className="row">
                <button onClick={clear}>C</button>
                <button onClick={() => onClickButton('0')}>0</button>
                <button onClick={calculate}>=</button>
                <button onClick={() => onClickOperator('*')}>*</button>
            </div>
        </div>
    );
};

export default Button;

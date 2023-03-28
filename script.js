let first;
let second;
let operation;
let operatorSymbol;

function add(a, b) {
    operatorSymbol = '+';
    return a + b;
}

function subtract(a, b) {
    operatorSymbol = '-';
    return a - b;
}

function divide(a, b) {
    operatorSymbol = '÷';
    return a / b;
}

function multiply(a, b) {
    operatorSymbol = '×';
    return a * b;
}

function operate(a, b, operator) {
    return operator(a, b);
}

// first = 10;
// second = 60;
// operation = divide;

// console.log(operate(first, second, operation));

// handle display value
let displayValue = '';
const numberButtons = document.querySelectorAll('.number');
const result = document.getElementsByClassName('result')[0];
const history = document.getElementsByClassName('history')[0];

setResults(displayValue);

function setResults(display) {
    result.textContent = Number(display).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 15 });
}

numberButtons.forEach(currentBtn => {
    currentBtn.addEventListener('click', e => {
        // console.log(e.target.textContent);
        // console.log(result.textContent);
        if (displayValue.length > 15) {
            return;
        } else {
            displayValue += e.target.textContent;
            if (displayValue.includes('.0')) {
                result.textContent = displayValue.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 15 });
            } else {
                setResults(displayValue);
            }
            // console.log(displayValue.length);
        }
    });
});

const deciButton = document.getElementsByClassName('decimal')[0];

deciButton.addEventListener('click', e => {
    // console.log(e);
    // console.log(displayValue);
    if (displayValue.includes('.')) {
        return;
    } else {
        displayValue += e.target.textContent;
        result.textContent = displayValue.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 15 });
        // console.log(displayValue);
    }
});

document.getElementsByClassName('clear')[0].addEventListener('click', e => {
    displayValue = '';
    setResults(displayValue);
    history.textContent = '';
});

const operButtons = document.querySelectorAll('.operator');
operButtons.forEach(currentBtn => {
    currentBtn.addEventListener('click', e => {
        // console.log(e);
        // store current displayValue into first number
        first = Number(displayValue);
        displayValue = '';
        setResults(displayValue);

        // console.log(first);

        // set operation function
        switch (e.target.textContent) {
            case '÷':
                //change to divide
                operation = divide;
                break;
            case '×':
                //change to multiply
                operation = multiply;
                break;
            case '+':
                //change to add
                operation = add;
                break;
            case '-':
                //change to subtract
                operation = subtract;
                break;
            default:
                break;
        }
        // set history
        history.textContent = `${Number(first).toLocaleString(undefined, { minimumSignificantDigits: 1, maximumSignificantDigits: 8 })} ${e.target.textContent} `;
    });
});

document.getElementsByClassName('equals')[0].addEventListener('click', e => {
    // console.log(e);
    second = Number(displayValue);
    displayValue = '';
    if (operation === undefined) return;
    // set display
    setResults(operate(first, second, operation));
    // set history
    history.textContent = `${Number(first).toLocaleString(undefined, { minimumSignificantDigits: 1, maximumSignificantDigits: 8 })} ${operatorSymbol} ${Number(second).toLocaleString(undefined, { minimumSignificantDigits: 1, maximumSignificantDigits: 8 })}`;

    // displayValue = result.textContent;
    first = second;
    second = result.textContent;
});
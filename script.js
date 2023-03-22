let first;
let second;
let operation;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function operate(a, b, operator) {
    return operator(a, b);
}

first = 10;
second = 60;
operation = divide;

console.log(operate(first, second, operation));
function addTwoNumbers(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtractTwoNumbers(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiplyTwoNumbers(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divideTwoNumbers(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

let firstNumberChosen;
let operatorChosen;
let secondNumberChosen;

function callOperationFunctions(operator, firstNumber, secondNumber) {
    if(operator === "+") return add(firstNumber, secondNumber);
    if(operator === "-") return subtract(firstNumber, secondNumber);
    if(operator === "*") return multiply(firstNumber, secondNumber);
    if(operator === "/") return divide(firstNumber, secondNumber);
}


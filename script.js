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
let result;

function callOperationFunctions(operator, firstNumber, secondNumber) {
    if(operator === "+") return addTwoNumbers(firstNumber, secondNumber);
    if(operator === "-") return subtractTwoNumbers(firstNumber, secondNumber);
    if(operator === "*") return multiplyTwoNumbers(firstNumber, secondNumber);
    if(operator === "/") return divideTwoNumbers(firstNumber, secondNumber);
}

const body = document.querySelector("body");
const screen = document.querySelector(".screen");

body.addEventListener("click", (event) => {
    if (firstNumberChosen === undefined && typeof(+event.target.textContent) === "number") {
        firstNumberChosen = +event.target.textContent;
        screen.textContent = firstNumberChosen
    } else if (firstNumberChosen != undefined && secondNumberChosen === undefined && (event.target.textContent === "+" || event.target.textContent === "-" || event.target.textContent === "*" || event.target.textContent === "/" )) {
        operatorChosen = event.target.textContent;
    } else if (firstNumberChosen != undefined && operatorChosen != undefined && secondNumberChosen === undefined && typeof(+event.target.textContent) === "number") {
        secondNumberChosen = +event.target.textContent;
        screen.textContent = secondNumberChosen
    } else if (firstNumberChosen != undefined && operatorChosen != undefined && secondNumberChosen != undefined && event.target.textContent === "=") {
        result = callOperationFunctions(operatorChosen, firstNumberChosen, secondNumberChosen);
        screen.textContent = result
    } else if (event.target.textContent === "AC") {
        firstNumberChosen = undefined;
        operatorChosen = undefined;
        secondNumberChosen = undefined;
        result = undefined;
        screen.textContent = 0;
    }
})
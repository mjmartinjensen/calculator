function add(a, b) {
    return +a + +b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function makeCalculation(operator, a, b) {
    if(operator === "+") return add(a, b);
    if(operator === "-") return subtract(a, b);
    if(operator === "*") return multiply(a, b);
    if(operator === "/") return divide(a, b);
}

let firstNumberInput = "0";
let operatorInput = "+";
let secondNumberInput = "0";
let result = "0";

const body = document.querySelector("body");
const screen = document.querySelector(".screen");

body.addEventListener("click", (event) => {
    if (!isNaN(+event.target.textContent)) {
        if (secondNumberInput === "0") {
            secondNumberInput = event.target.textContent
        } else {
            secondNumberInput += event.target.textContent
        }
        screen.textContent = secondNumberInput;
    }

    if (event.target.textContent === "+" || 
    event.target.textContent === "-" ||
    event.target.textContent === "*" ||
    event.target.textContent === "/") {
        firstNumberInput = makeCalculation(operatorInput, firstNumberInput, secondNumberInput);
        operatorInput = event.target.textContent;
        secondNumberInput = "0";

        firstNumberInput === Infinity ? screen.textContent = "Dumbass" : screen.textContent = +parseFloat(firstNumberInput).toFixed(2);
    }

    if (event.target.textContent === "=") {
        result = makeCalculation(operatorInput, firstNumberInput, secondNumberInput);
        firstNumberInput = "0";
        operatorInput = "+";
        secondNumberInput = "0";

        result === Infinity ? screen.textContent = "Dumbass" : screen.textContent = +parseFloat(result).toFixed(2);
    }

    if (event.target.textContent === "AC") {
        firstNumberInput = "0";
        operatorInput = "+";
        secondNumberInput = "0";
        result = "0";
        screen.textContent = "0";
    }

});
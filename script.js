let first_number = null;
let second_number = null;
let operator = null;
let display = null;
let result = null;
let stage=0;

document.addEventListener("DOMContentLoaded", () => {
    display = document.querySelector('.display')
    document.querySelector('#equals').addEventListener('click', calculateResult);
    document.querySelector('#clear').addEventListener('click', clear);

    numbers = document.querySelectorAll('.number');
    operators = document.querySelectorAll('.operator');
    numbers.forEach(number => {
        number.addEventListener("click", () => addNumber(number.value));
    });
    operators.forEach(operator => {
        operator.addEventListener('click', () => addOperator(operator.value));
    })
});


function calculateResult() {
    console.log("Calculate result!")
    if (first_number!=null && second_number!=null && operator!=null && stage < 3) {
        if (operator === "+") {
            result = Number(first_number) + Number(second_number);
            display.innerHTML = result;
        }
        if (operator === "-") {
            result = first_number - second_number;
            display.innerHTML = result;
        }
        if (operator === "*") {
            result = first_number * second_number;
            display.innerHTML = result;
        }
        if (operator === "/") {
            if (second_number != 0){
                result = first_number / second_number;
                display.innerHTML = result;
            }
        }
    }
    stage=3;
}

function addOperator(op) {
    if (stage===0) {
        operator = op;
        display.innerHTML+=" " + op;
        stage = 1;
    }
}

function clear() {
    console.log("Clear!")
    first_number = null;
    second_number = null;
    operator = null;
    result = null;
    display.innerHTML = "";
    stage=0;
}

function addNumber(value) {
    console.log("Number pressed!");
    if (stage === 1) {
        display.innerHTML = "";
        stage = 2;
    }
    if (stage===3) {
        display.innerHTML = "";
        stage = 0;
    }
    display.innerHTML+=value
    if (stage===0) first_number = display.innerHTML;
    else second_number = display.innerHTML;
}
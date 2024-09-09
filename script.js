let first_number = null;
let second_number = null;
let operator = null;
let display = null;
let result = null;
let stage=0;
let decimal = null;

document.addEventListener("DOMContentLoaded", () => {
    display = document.querySelector('.display')
    document.querySelector('#equals').addEventListener('click', calculateResult);
    document.querySelector('#clear').addEventListener('click', clear);
    decimalButton = document.querySelector('#decimal');
    numbers = document.querySelectorAll('.number');
    operators = document.querySelectorAll('.operator');
    document.querySelector('#sign').addEventListener('click', sign);
    numbers.forEach(number => {
        number.addEventListener("click", () => addNumber(number.value));
    });
    operators.forEach(operator => {
        operator.addEventListener('click', () => addOperator(operator.value));
    })
});


function calculateResult() {
    console.log("Calculate result!")
    if (first_number!=null && second_number!=null && operator!=null) {
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
            else error();
        }
        stage=0;
        first_number = result;
        second_number = null;
    }
    else error();
}

function checkDecimal() {
    if (display.innerHTML.includes('.')) {
        decimalButton.disabled = true;
    }
    else decimalButton.disabled = false;
}

function addOperator(op) {
    if (stage===0 && first_number!=null) {
        operator = op;
        display.innerHTML+=" " + op;
        stage = 1;
    }
    else error();
}

function error() {
    stage=3;
    display.innerHTML="ERROR";
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
    setValue(display.innerHTML);

    checkDecimal();
}

function sign() {
    let num = display.innerHTML;
    if (num.includes('-')) {
        num = num.replace(/-/g, "");
        display.innerHTML = num;
        setValue(num);
        console.log("Removing sign!");
    }
    else {
        display.innerHTML = '-'+num;
        setValue('-'+num);
        console.log('Adding sign!');
    }

}

function setValue(val) {
    if (stage===0) first_number = val;
    else second_number = val;
}
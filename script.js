let display = document.getElementById('display');
let expression = '';

function appendNumber(num) {
    expression += num.toString();
    display.value = expression;
}

function appendOperator(operator) {
    expression += operator.toString();
    display.value = expression;
}

function calculate() {
    try {
        let result = eval(expression);
        display.value = result.toString();
        expression = result.toString();
    } catch (error) {
        display.value = 'Error';
        expression = '';
    }
}

function clearDisplay() {
    display.value = '';
    expression = '';
}

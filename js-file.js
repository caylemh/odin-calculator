//Calculator functions
function add(a, b) {
    return a+b
}

function minus(a, b) {
    return a-b
}

function divide(a, b) {
    return b == 0 ? 'Cannot divide by zero!' : Math.fround(a/b,2)
}

function multiply(a, b) {
    return a*b
}

// Operator Function -  For the 'EQUAL' sign
function operate(operand,num1,num2) {
    switch (operand) {
        case "+":
            return add(num1,num2)
        case "-":
            return minus(num1,num2)
        case "/":
            return divide(num1,num2)
        case "*":
            return multiply(num1,num2)
        default:
            'No operand selected'
            break;
    }
}
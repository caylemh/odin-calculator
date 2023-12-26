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
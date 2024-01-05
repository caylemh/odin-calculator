//Calculator functions
function add(a, b) {
    return a+b
}

function minus(a, b) {
    return a-b
}

function divide(a, b) {
    return b === 0 ? 'Cannot divide by zero!' : Math.fround(a/b,2)
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

//Display for the calculations and result
const displayCalc = document.querySelector('.calculations')
const displayResult = document.querySelector('.result')

//button events
const buttonNums = document.querySelectorAll('.numbtns')
const buttonOps = document.querySelectorAll('.opsbtns')

const numButtons = Array.from(buttonNums)
const opsButtons = Array.from(buttonOps)

const displayValues = []
let nums1 = []
let nums2 = []
let num1 = undefined
let num2 = undefined
let operator = undefined

console.log(nums1,nums2,operator);

numButtons.forEach(item => {
    item.addEventListener('click', () => {
        displayValues.push(item.textContent)
        if (!operator) {
            nums1.push(item.textContent)
            num1 = parseFloat(nums1.join(''))
            
            console.log(`num1 = ${num1}`);
        } else {
            nums2.push(item.textContent)
            num2 = parseFloat(nums2.join(''))
            
            console.log(`num2 = ${num2}`);
        }
    })
})

opsButtons.forEach(item => {
    item.addEventListener('click', () => {
        displayValues.push(item.textContent)
        if (!num2) {
            operator = item.getAttribute('value')
            
            console.log(operator);
        } else {
            displayResult.textContent = operate(operator, num1, num2)
            num1 = parseFloat(displayResult.textContent)

            //reset the values
            nums1 = []
            nums2 = []
            num2 = undefined
            operator = item.getAttribute('value')
            console.log(operator);
        }
    })
})
//Calculator functions
function add(a, b) {
    return a+b
}

function minus(a, b) {
    return a-b
}

function divide(a, b) {
    const num = a/b
    return Math.round((num + Number.EPSILON) * 100) / 100
}

function multiply(a, b) {
    const num = a*b
    return Math.round((num + Number.EPSILON) * 100) / 100
}

//Clear function
function clrAll() {
    displayCalc.textContent = '='
    displayResult.textContent = 0
    displayValues = []
    nums1 = []
    nums2 = []
    num1 = undefined
    num2 = undefined
    operator = undefined
}

// Buttons disable
function btnDisable() {
    buttonNums.forEach(item => {
        item.classList.toggle('no-pointer')
    })

    buttonOps.forEach(item => {
        item.classList.toggle('no-pointer')
    })

    buttonEqual.classList.toggle('no-pointer')
}

// Operator Function -  For the 'EQUAL' sign
function operate(operand,num1,num2) {
    switch (operand) {
        case "+":
            return add(num1,num2)
        case "-":
            return minus(num1,num2)
        case "/":
            if (num2 == 0) {
                displayCalc.textContent = "Cannot divide by zero..."
                btnDisable()
                return -1
            }
            displayCalc.textContent = displayValues.join('')
            return divide(num1,num2)
        case "*":
            return multiply(num1,num2)
        default:
            'No operand selected'
            break;
    }
}

//Check if there is an operator
function isOperator(item) {
    if (!operator) {
        nums1.push(item.textContent)
        num1 = parseFloat(nums1.join(''))
        displayCalc.textContent = displayValues.join('')
        console.log(`num1 = ${num1}`,typeof(num1));
    } else {
        nums2.push(item.textContent)
        num2 = parseFloat(nums2.join(''))
        displayCalc.textContent = displayValues.join('')

        console.log(`num2 = ${num2}`,typeof(num2));
    }
}

//Check if there is a num2
function isNum2(item) {
    if (num2 == undefined) {
        operator = item.getAttribute('value')
        displayCalc.textContent = displayValues.join('')
        
        console.log(operator);
    } else {
        const temp = operate(operator, num1, num2)
        num1 = parseFloat(temp)
        displayResult.textContent = num1

        //reset the values
        nums1 = []
        nums2 = []
        num2 = undefined
        operator = item.getAttribute('value')
        console.log(operator);
    }
}

//Display for the calculations and result
const displayCalc = document.querySelector('.calculations')
const displayResult = document.querySelector('.result')

//button events
const buttonNums = document.querySelectorAll('.numbtns')
const buttonOps = document.querySelectorAll('.opsbtns')
const buttonClr = document.querySelector('.clear')
const buttonEqual = document.querySelector('.equal')

const numButtons = Array.from(buttonNums)
const opsButtons = Array.from(buttonOps)

let displayValues = []
let nums1 = []
let nums2 = []
let num1 = undefined
let num2 = undefined
let operator = undefined

console.log(nums1,nums2,operator);

numButtons.forEach(item => {
    item.addEventListener('click', () => {
        displayValues.push(item.textContent)
        buttonOps.forEach(item => {
            item.classList.remove('no-pointer')
        })
        isOperator(item)
    })
})

opsButtons.forEach(item => {
    item.addEventListener('click', () => {
        displayValues.push(item.textContent)
        isNum2(item)
    })
})

buttonClr.addEventListener('click', () => {
    if (displayCalc.textContent == "Cannot divide by zero...") {
        btnDisable()
    }
    buttonOps.forEach(item => {
        item.classList.add('no-pointer')
    })
    clrAll()
})

buttonEqual.addEventListener('click', () => {
    if(num1 == undefined) {
        displayCalc.textContent = 'Please enter some values...'
    } else if (!operator) {
        displayResult.textContent = num1
    } else if (num2==undefined) {
        displayCalc.textContent = "Enter another value..."
    } else {
        displayResult.textContent = operate(operator, num1, num2)
    }
})
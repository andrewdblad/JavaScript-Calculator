
const buttons = document.querySelectorAll('button')
const calculatorDisplay = document.querySelector('.box')

let calculation = []
let totalCalc

function calculate(button) {
    const value = button.textContent
    if (value === "CLEAR") {
        calculation = []
        calculatorDisplay.textContent = ''
    } else if (value === "=") {
        calculatorDisplay.textContent = eval(totalCalc)
    } else {
        calculation.push(value)
        totalCalc = calculation.join('')
        calculatorDisplay.textContent = totalCalc
    }
}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))
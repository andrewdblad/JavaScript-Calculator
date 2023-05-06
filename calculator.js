/* Select output box and all buttons */
const buttons = document.querySelectorAll('button')
const calculatorDisplay = document.querySelector('.box')

/* Set variables*/
let calculation = []
let totalCalc

function calculate(button) {
    const value = button.textContent
    if (value === "CLEAR") {
        /* Reset calculation array and text output box */
        calculation = []
        calculatorDisplay.textContent = ''
    } else if (value === "=") {
        /* Performs calculation using built in eval func */
        calculatorDisplay.textContent = eval(totalCalc)
    } else {
        /* add value to array */
        calculation.push(value)
        /* join all added values into one string */
        totalCalc = calculation.join('')
        /* Display string in text box */
        calculatorDisplay.textContent = totalCalc
    }
}
/* function call on button press */
buttons.forEach(button => button.addEventListener('click', () => calculate(button)))
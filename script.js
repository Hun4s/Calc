let val1 = '';
let val2 = '';
let opr = null

const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const pointBtn = document.getElementById('pointBtn')
const equalBtn = document.getElementById('equalBtn')
const screenCurrent = document.getElementById('screenCurrent')
const screenLast = document.getElementById('screenLast')

numberButtons.forEach((button) => 
    button.addEventListener('click', () => appendNumber(button.textContent))
)

/*operatorButtons.forEach((button) =>
  button.addEventListener('click', () => setOperation(button.textContent))
) */

function appendNumber(number) {
    if (screenCurrent.textContent === '0' || resetScreen)
        resetScreen()
    screenCurrent.textContent += number
}

function resetScreen() {
    screenCurrent.textContent = ''
    resetScreen = false
}






function add(a, b) {
    return a + b;
};

function sub(a, b) {
    return a - b;
};

function mult(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(a, ab, opr) {
    if (opr === '+') {
        return add(a, b)
    }
    if (opr === '-') {
        return sub(a, b)
    }
    if (opr === '*') {
        return mult(a, b)
    }
    if (opr === '/') {
        return divide(a, b)
    }
};
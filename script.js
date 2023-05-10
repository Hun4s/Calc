let val1 = '';
let val2 = '';
let opr = null
let shouldReset = false;


const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const pointBtn = document.getElementById('pointBtn')
const equalBtn = document.getElementById('equalBtn')
const screenCurrent = document.getElementById('screenCurrent')
const screenLast = document.getElementById('screenLast')
const clearBtn = document.getElementById('clearBtn')
const deleteBtn = document.getElementById('deleteBtn')

numberButtons.forEach((button) => button.addEventListener('click', () => addNumber(button.textContent)))
operatorButtons.forEach((button) => button.addEventListener('click', () => addOpr(button.textContent)))
clearBtn.addEventListener('click', () => clear())
deleteBtn.addEventListener('click', () => deleteNumber())
equalBtn.addEventListener('click', () => calculate())
pointBtn.addEventListener('click', () => addPoint())

function addNumber(number) {
    if (screenCurrent.textContent === '0' || shouldReset) 
        reset()   
    screenCurrent.textContent += number
};

function addOpr(operator) {
    val1 = screenCurrent.textContent
    opr = operator
    screenLast.textContent = `${val1} ${opr}`
    shouldReset = true
};

function addPoint() {
    if (shouldReset) reset()
    if (screenCurrent.textContent === '')
        screenCurrent.textContent = '0'
    if (screenCurrent.textContent.includes('.')) return
    screenCurrent.textContent += '.'
};

function reset() {
    screenCurrent.textContent = ''
    shouldReset = false
};

function clear() {
    screenCurrent.textContent = '0'
    screenLast.textContent = ''
    val1 = ''
    val2 = ''
    opr = null
};

function deleteNumber() {
    screenCurrent.textContent = screenCurrent.textContent
      .toString()
      .slice(0, -1)
};

function calculate() {
    val2 = screenCurrent.textContent
    screenCurrent.textContent = roundResult(
        operate(val1, val2, opr)
    )
    screenLast.textContent = `${val1} ${opr} ${val2} =`
    opr = null
};

function roundResult(number) {
    return Math.round(number * 1000) / 1000
};

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

function operate(a, b, opr) {
    a = Number(a)
    b = Number(b)

   switch (opr) {
    case '+':
      return add(a, b)
    case '−':
      return sub(a, b)
    case '×':
      return mult(a, b)
    case '÷':
      if (b === 0) return null
      else return divide(a, b)
    default:
      return null
  }
};
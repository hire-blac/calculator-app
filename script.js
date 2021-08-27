
let displayedNum = '';
let num1 = 0;
let num2 = 0;
let operator = '';
let firstNum = true;

function changeTheme(theme) {

  switch (theme) {
    case 1:
      document.getElementById('currentTheme').className = "theme-1";
      break;
    case 2:
      document.getElementById('currentTheme').className = "theme-2";
      break;
    default:
      document.getElementById('currentTheme').className = "theme-3";
      break;
  }
}

function handleClick(label) {

  switch (label) {
    case "reset":
      reset();
      break;
    case "del":
      deleteNum();
      break;
    case "=":
      displayedNum = calculate(num1, num2, operator);
      display(displayedNum);
      num1 = Number(displayedNum);
      break;
    case "+":
    case "-":
    case "/":
    case "x":
      operator = label;
      displayedNum = '';
      firstNum = false;
      break;
    default:
      displayedNum += label;
      display(displayedNum);
      firstNum ? num1 = Number(displayedNum) : num2 = Number(displayedNum);
      break;
  }
}

function calculate(num1, num2, operator) {
  let result;
  switch (operator) {
    case "x":
      result = num1 * num2;
      break;
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 -num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result = num1;
      break;
  }
  return Number.isInteger(result) ? result : result.toPrecision(9);
}

function display(number) {
  document.getElementById('display').innerHTML = number;
}

function reset() {
  displayedNum = '';
  num1 = 0;
  num2 = 0;
  operator = '';
  firstNum = true;
  display(displayedNum);
}

function deleteNum() {
  displayedNum = displayedNum.slice(0,displayedNum.length - 1);
  display(displayedNum);
  firstNum ? num1 = Number(displayedNum) : num2 = Number(displayedNum);
}
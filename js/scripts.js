// business logic
function add(number1, number2)  {
  return number1 + number2;
}

//user interface logic
const number1 = parseInt(prompt("Enter a temperature in Celsius:"));
// const number2 = prompt("Enter another number:");

window.alert("The temperature in Fahrenheit is " + ((number1 * 1.8 + 32) + "F."));
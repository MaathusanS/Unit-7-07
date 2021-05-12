// Defines variables.
let firstNum = 0
let secondNum = 0
let counter = 0
let answer = 0
let negative = false

document.getElementById('button').addEventListener('click', calculate) // Starts event addEventListener for Multiply button that triggers calculate function.

function calculate () {
  // Clears out previous answer value and resets values.
  answer = 0
  negative = false
  
  // Gets values from input boxes.
  firstNum = document.getElementById('input1').value
  secondNum = document.getElementById('input2').value

  // Converts values into integers.
  firstNum = parseInt(firstNum)
  secondNum = parseInt(secondNum)

  // Checks if the firstNum is negative.
  if (firstNum < 0) {
    negative = !negative // If number is negative, negative = false will be true.
    firstNum = Math.abs(firstNum) // Converts firstNum into absolute number.
  }

  // Checks if the secondNum is negative.
  if (secondNum < 0) {
    negative = !negative // If number is negative, negative = false will be true.
    secondNum = Math.abs(secondNum) // Converts secondNum into absolute number.
  }

  // Creates loop that starts a counter that runs until the counter is not smaller than firstNum and increases the counter by one after each loop.
  for (counter = 0; counter < firstNum; counter++) {
    answer = answer + secondNum // Takes stored value and adds secondNum to it.
  }

  // Re-adds negative sign to negative numbers.
  if (negative) {
    answer = 0 - answer
  }
  
  // Prints result to page.
  document.getElementById('result').innerHTML = 'Answer: ' + answer // Displays result.
}

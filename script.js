var magicNumber = Math.floor(Math.random() * 100) + 1; 

document.querySelector('.guess').addEventListener('click', grabInput)
document.querySelector('.reset').addEventListener('click', reset)
document.querySelector('.clear').addEventListener('click', clearInputFields)
document.querySelector('.guess-field').addEventListener('keyup', enableButtons)

function grabInput(event) { 
  event.preventDefault()
  var userInput = document.querySelector('.guess-field').value
  document.querySelector('.last-guess').innerText = userInput
  numberCheck()
  clearInputFields()
}

function clearInputFields() {
  var userInput = document.querySelector('.guess-field').value = ''
  var lastGuess = document.querySelector('.last-guess').value = ''
}

function reset() {
  magicNumber = Math.floor(Math.random() * 100) + 1
  clearInputFields()
}

function enableButtons() {
  document.querySelector('.guess').disabled = false
  document.querySelector('.clear').disabled = false
  document.querySelector('.reset').disabled = false
}
function disableButtons() {
  document.querySelector('.guess').disabled = true
  document.querySelector('.clear').disabled = true
  document.querySelector('.reset').disabled = true
}

function numberCheck() {
  var guess = parseInt(document.querySelector('.guess-field').value)
  var feedback = document.querySelector('.feedback')
  if (isNaN(guess)) {
    document.querySelector('.last-guess').value = ":("
    feedback.innerText = "Please guess a number"
  } else if (guess > magicNumber) {
    feedback.innerText = "Too high, try again"
  } else if (guess < magicNumber) {
    feedback.innerText = "Too low, try again"
  } else {
    feedback.innerText = "Hooray! You win!"
  }
  disableButtons()
}
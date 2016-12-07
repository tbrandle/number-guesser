var submitBtn = document.getElementById('submit-btn')
var clearBtn = document.getElementById('clear-btn')
var resetBtn = document.getElementById('reset-btn')
var randomNum = Math.floor(Math.random() * 100 +1)
var userGuess = document.getElementById('user-guess')
var lastGuess = document.querySelector('.last-guess')

var min = document.getElementById('min')
var min = document.getElementById('max')

submitBtn.addEventListener('click', function(){
  var parse = parseInt(userGuess.value)
  var lgText = document.querySelector('.lg-text')
  var result = document.querySelector('.result')

  //displays last guess to p tag
  function guessDisplay (msg) {
    lgText.innerText = "Your last guess was:";
    lastGuess.innerText = userGuess.value;
    result.innerText = msg;
  }
  //Sets specifications for user input, compares random number to user input
  if (parse < 1 || parse > 100 || isNaN(parse) === true) { //<---isNaN(parse) is saying "parse is NaN"...that statement is equal to "true"
    alert("ERROR: You must choose a number between 1-100");
    userGuess.value = "";
    clearBtn.disabled = true
  } else if (parse === randomNum) {
    guessDisplay ("BOOM! Let's play again! Guess another number.")
    randomNum = Math.floor(Math.random() * 100 +1)
  } else if (parse < randomNum){
    guessDisplay ("That is too low")
  } else {
    guessDisplay ("That is too high")
  }
})

//disables buttons
function swtchBtn (val1, val2){
  clearBtn.disabled = val1;
  resetBtn.disabled = val2;
}
swtchBtn(true, true)

userGuess.addEventListener('input', function(){
  swtchBtn(false, false)
  if (userGuess.value === "") {
    swtchBtn(true)
  } else {
    swtchBtn(false)
  }
})

//clears lastGuess without generating a new randomNum
clearBtn.addEventListener('click', function(){
  userGuess.value = ""
  swtchBtn(true)
})

//clears the userGuess, lastGuess and generates a new randomNum
resetBtn.addEventListener('click', function () {
  var lgText = document.querySelector('.lg-text')
  var result = document.querySelector('.result')
  userGuess.value = ""
  lastGuess.innerText = ""
  lgText.innerText = ""
  result.innerText = ""
  swtchBtn(true, true)
  randomNum = Math.floor(Math.random() * 100 +1)
})

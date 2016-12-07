var submitBtn = document.getElementById('submit-btn')
var clearBtn = document.getElementById('clear-btn')
var resetBtn = document.getElementById('reset-btn')
var randomNum = Math.floor(Math.random() * 100 +1)
var userGuess = document.getElementById('user-guess')
var lastGuess = document.querySelector('.last-guess')

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
    alert("You must choose a number between 1-100");
    userGuess.value = "";
  } else if (parse === randomNum) {
    guessDisplay ("BOOM! Let's play again! Guess another number.")
    randomNum = Math.floor(Math.random() * 100 +1)
  } else if (parse < randomNum){
    guessDisplay ("That is too low")
  } else {
    guessDisplay ("That is too high")
  }
})

//clears lastGuess without generating a new randomNum
clearBtn.addEventListener('click', function(){
  userGuess.value = ""
})

//clears the userGuess, lastGuess and generates a new randomNum
resetBtn.addEventListener('click', function () {
  var lgText = document.querySelector('.lg-text')
  var result = document.querySelector('.result')
  userGuess.value = ""
  lastGuess.innerText = ""
  lgText.innerText = ""
  result.innerText = ""
  randomNum = Math.floor(Math.random() * 100 +1)
})

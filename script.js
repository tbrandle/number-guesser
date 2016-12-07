var submitBtn = document.getElementById('submit-btn')
var clearBtn = document.getElementById('clear-btn')
var resetBtn = document.getElementById('reset-btn')
var randomNum = Math.floor(Math.random() * 100 +1)

//compares random number to user input
//displays last guess to p tag
submitBtn.addEventListener('click', function(){
  var userGuess = document.getElementById('user-guess')
  var lastGuess = document.querySelector('.last-guess')
  var parse = parseInt(userGuess.value)
  var lgText = document.querySelector('.lg-text')
  var result = document.querySelector('.result')
  lgText.innerText = "Your last guess was:"
  lastGuess.innerText = userGuess.value


  if (parse === randomNum) {
    result.innerText = "You won!"
  } else if (parse < randomNum){
    result.innerText = "That is too low"
  } else {
    result.innerText = "That is too high"
  }
})

//clears lastGuess without generating a new randomNum
clearBtn.addEventListener('click', function(){
  var userGuess = document.getElementById('user-guess')
  userGuess.value = ""
})

//clears the userGuess, lastGuess and generates a new randomNum
resetBtn.addEventListener('click', function () {
  var userGuess = document.getElementById('user-guess')
  var lastGuess = document.querySelector('.last-guess')
  var lgText = document.querySelector('.lg-text')
  var result = document.querySelector('.result')
  userGuess.value = ""
  lastGuess.innerText = ""
  lgText.innerText = ""
  result.innerText = ""

  randomNum = Math.floor(Math.random() * 100 +1)
})

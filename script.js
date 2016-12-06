var submitBtn = document.getElementById('submit-btn')
var clearBtn = document.getElementById('clear-btn')
var resetBtn = document.getElementById('reset-btn')
var randomNum = Math.floor(Math.random() *100 +1)

//compares random number to user input
//displays last guess to p tag
submitBtn.addEventListener('click', function () {
  var userGuess = document.getElementById ('user-guess');
  var parse = parseInt(userGuess.value);
  var lastGuess = document.querySelector('.prev-guess');
  lastGuess.innerText = userGuess.value;

  if (randomNum === parse) {
      console.log("Good job!", randomNum);
    } else if (randomNum < parse) {
      console.log("Too high", randomNum);
    } else {
      console.log("Too low", randomNum);
    }
  }
)

//clears the user inputs
clearBtn.addEventListener('click', function() {
  var userGuess = document.getElementById ('user-guess');

  userGuess.value = "";
})

//Reset Button...this will clear the random number
resetBtn.addEventListener('click', function() {
  randomNum = Math.floor(Math.random() *100 +1);
  var userGuess = document.getElementById ('user-guess');
  var lastGuess = document.querySelector('.prev-guess');

  userGuess.value = "";
  lastGuess.innerText = "";
})





// Math.floor(Math.random() * 100 + 1)

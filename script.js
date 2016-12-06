var userGuess = document.getElementById('user-guess')
var submitBtn = document.getElementById('submit-btn')
var clearBtn = document.getElementById('clear-btn')
var resetBtn = document.getElementById('reset-btn')
var previousGuess = document.querySelector('.prev-guess')
var randomNum = Math.floor(Math.random() * 100 + 1);


// Displays the users last guess
submitBtn.addEventListener('click', function () {
  var parse = parseInt(userGuess.value);
  previousGuess.innerText = userGuess.value;

  if (randomNum === parse) {
    console.log("Congrats!  You guessed the correct number!", randomNum);
    }
    else if (randomNum < parse){
    console.log("You guessed too low...Try again", randomNum);
    }
    else {
    console.log("Your guess was too high.", randomNum);
  }
}

)

//clears the user inputs






// Math.floor(Math.random() * 100 + 1)

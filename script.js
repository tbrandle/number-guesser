//*************GLOBAL VARIABLE*************//
var submitBtn = document.getElementById('submit-btn')
var clearBtn = document.getElementById('clear-btn')
var resetBtn = document.getElementById('reset-btn')
var paramBtn = document.getElementById('param-btn')
var userGuess = document.getElementById('user-guess')
var lastGuess = document.querySelector('.last-guess')
var randomNum = Math.floor((Math.random() * (maxFn() - minFn())) + minFn())

//*************HELPER FUNCTIONS*************//

//Set min and maxFn values and convert to integer
  //global, paramBtn, resetBtn
function minFn() {
var min = document.getElementById('min').value
return parseInt(min)
}
function maxFn() {
var max = document.getElementById('max').value
return parseInt(max)
}

//disables buttons
  //userGuess, clearBtn, resetBtn
function swtchBtn (val1, val2){
  clearBtn.disabled = val1;
  resetBtn.disabled = val2;
}
swtchBtn(true, true)

//resets values and user inputs
  //submitBtn, clearBtn, resetBtn,
function eraseInput (var1, var2, var3){
  var1.value = "";
  var2.value = "";
  var3.value = "";
}
function eraseText (var1, var2, var3){
  var1.innerText = "";
  var2.innerText = "";
  var3.innerText = "";
}
//*************ADD EVENT LISTENERS*************//

    //"Enter" button for min and max
paramBtn.addEventListener('click', function(){
  randomNum = Math.floor((Math.random() * (maxFn() - minFn())) + minFn())
  console.log(randomNum);
})

submitBtn.addEventListener('click', function(){
  var parseG = parseInt(userGuess.value)
  var lgText = document.querySelector('.lg-text')
  var result = document.querySelector('.result')
  //displays last guess to p tag
  function guessDisplay (msg) {
    lgText.innerText = "Your last guess was:";
    lastGuess.innerText = userGuess.value;
    result.innerText = msg;
  }
  //Sets specifications for user input, compares random number to user input
  if (parseG < minFn() || parseG > maxFn() || isNaN(parseG) === true) { //<---isNaN(parse) is saying "parseG is NaN"...that statement is equal to "true"
    alert("ERROR: You must choose a number between the min and the max that you set");
    eraseInput(userGuess);
    clearBtn.disabled = true
  } else if (parseG === randomNum) {
    guessDisplay ("BOOM! Let's make this more diffcult.");
    var minTen = minFn() - 10;
    var maxTen = maxFn() + 10;
    randomNum = Math.floor((Math.random() * (maxTen - minTen)) + minTen);
    console.log (minTen);
    console.log (maxTen);
    console.log (randomNum);
  } else if (parseG < randomNum){
    guessDisplay ("That is too low")
  } else {
    guessDisplay ("That is too high")
  }
})

userGuess.addEventListener('input', function(){
  if (userGuess.value === "") {
    swtchBtn(true)
  } else {
    swtchBtn(false)
  }
})

clearBtn.addEventListener('click', function(){
  eraseInput(userGuess)
  swtchBtn(true)
})

resetBtn.addEventListener('click', function () {
  var lgText = document.querySelector('.lg-text')
  var result = document.querySelector('.result')
  var min = document.getElementById('min')
  var max = document.getElementById('max')
  eraseInput(userGuess, min, max)
  eraseText(lastGuess, lgText, result)
  swtchBtn(true, true)
  randomNum = Math.floor((Math.random() * (maxFn() - minFn())) + minFn())
})

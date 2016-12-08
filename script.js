//*************GLOBAL VARIABLE*************//
var submitBtn = document.getElementById('submit-btn')
var clearBtn = document.getElementById('clear-btn')
var resetBtn = document.getElementById('reset-btn')
var paramBtn = document.getElementById('param-btn')
var userGuess = document.getElementById('user-guess')
var lastGuess = document.querySelector('.last-guess')

var min = document.getElementById('min')
var max = document.getElementById('max')
var parseMin = parseInt(min.value)
var parseMax = parseInt(max.value)

var randomNum = Math.floor(Math.random() * parseMax - parseMin)
console.log(randomNum)

//*************HELPER FUNCTIONS*************//

submitBtn.disabled = true
clearBtn.disabled = true
resetBtn.disabled = true

//resets values and user inputs
  //submitBtn, clearBtn, resetBtn,
function eraseInput (var1, var2, var3){
  if (var2 === undefined && var3 === undefined) {
    var1.value = "";
  } else if (var3 === undefined){
    var1.value = "";
    var2.value = "";
  } else {
    var1.value = "";
    var2.value = "";
    var3.value = "";
  }
}

function eraseText (var1, var2, var3){
  if (var2 === undefined && var3 === undefined) {
    var1.innerText = "";
  } else if (var3 === undefined){
    var1.innerText = "";
    var2.innerText = "";
  } else {
    var1.innerText = "";
    var2.innerText = "";
    var3.innerText = "";
  }
}

//displays last guess to p tag
function guessDisplay (msg) {
  var lgText = document.querySelector('.lg-text')
  var result = document.querySelector('.result')
  lgText.innerText = "Your last guess was:";
  lastGuess.innerText = userGuess.value;
  result.innerText = msg;
}
//*************ADD EVENT LISTENERS*************//

    // "Enter" button for min and max
paramBtn.addEventListener('click', function(){
  parseMin = parseInt(min.value)
  parseMax = parseInt(max.value)

  console.log(parseMax, parseMin)
  randomNum = Math.floor(Math.random() * (parseMax - parseMin) + parseMin)
  min.disabled = true
  max.disabled = true
  resetBtn.disabled = false
  console.log(randomNum);
})

submitBtn.addEventListener('click', function(){
  var parseG = parseInt(userGuess.value)
  min.disabled = true
  max.disabled = true
  paramBtn.disabled = true
  resetBtn.disabled = false
  //Sets specifications for user input, compares random number to user input
  if (parseG < parseMin || parseG > parseMax || isNaN(parseG) === true) { //<---isNaN(parse) is saying "parseG is NaN"...that statement is equal to "true"
    alert("ERROR: You must choose a number between the min and the max that you set");
    eraseInput(userGuess);
    clearBtn.disabled = true
  } else if (parseG === randomNum) {
    guessDisplay ("BOOM! Let's increase your range to make it more difficult");
    parseMin = parseMin - 10;
    parseMax = parseMax + 10;
    randomNum = Math.floor((Math.random() * (parseMax - parseMin)) + parseMin);
    min.value = parseMin;
    max.value = parseMax;
  } else if (parseG < randomNum){
    guessDisplay ("That is too low")
  } else {
    guessDisplay ("That is too high")
  }
  console.log(randomNum, parseMin, parseMax)
})

userGuess.addEventListener('input', function(){
  if (userGuess.value === "") {
    clearBtn.disabled = true
    submitBtn.disabled = true
  } else {
    clearBtn.disabled = false
    submitBtn.disabled = false
  }
})

clearBtn.addEventListener('click', function(){
  eraseInput(userGuess)
  clearBtn.disabled = true
  // swtchBtnOff(clearBtn)
})

resetBtn.addEventListener('click', function () {
  var lgText = document.querySelector('.lg-text')
  var result = document.querySelector('.result')
  min.disabled = false;
  max.disabled = false;
  eraseInput(userGuess, min, max)
  eraseText(lastGuess, lgText)
  result.innerText = ""
  submitBtn.disabled = true
  clearBtn.disabled = true
  resetBtn.disabled = true
  paramBtn.disabled = false
  randomNum = Math.floor(Math.random() * (parseMax - parseMin) + parseMin)
})

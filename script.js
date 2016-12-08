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
console.log("MinNumber: " + parseMin + ",", "MaxNumber: " + parseMax + ",", "RandomNumber: " + randomNum)

//*************HELPER FUNCTIONS*************//

  //Functions to enable/disable buttons and inputs
function enableBtn(btn1, btn2, btn3, btn4) {
  if (btn2 === undefined && btn3 === undefined && btn4 === undefined) {
    btn1.disabled = false;
  } else if (btn3 === undefined && btn4 === undefined){
    btn1.disabled = false;
    btn2.disabled = false;
  } else if (btn4 === undefined){
    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
  } else {
    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
    btn4.disabled = false;
  }
}
function disableBtn(btn1, btn2, btn3, btn4) {
  if (btn2 === undefined && btn3 === undefined && btn4 === undefined) {
    btn1.disabled = true;
  } else if (btn3 === undefined && btn4 === undefined){
    btn1.disabled = true;
    btn2.disabled = true;
  } else if (btn4 === undefined){
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
  } else {
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
  }
}
disableBtn(submitBtn, clearBtn, resetBtn)

//resets values and user inputs
  //submitBtn, clearBtn, resetBtn,
function eraseInput(var1, var2, var3){
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
  randomNum = Math.floor(Math.random() * (parseMax - parseMin) + parseMin)
  disableBtn(min, max)
  enableBtn(resetBtn)
  console.log("MinNumber: " + parseMin + ",", "MaxNumber: " + parseMax + ",", "RandomNumber: " + randomNum)
})

submitBtn.addEventListener('click', function(){
  var parseG = parseInt(userGuess.value)
  disableBtn(min, max, paramBtn)
  enableBtn(resetBtn)
  //Sets specifications for user input, compares random number to user input
  if (parseG < parseMin || parseG > parseMax || isNaN(parseG) === true) {
    alert("ERROR: You must choose a number between the min and the max that you set");
    disableBtn(clearBtn);
  } else if (parseG === randomNum) {
    guessDisplay ("BOOM! Let's increase your range to make it more difficult");
    parseMin = parseMin - 10;
    parseMax = parseMax + 10;
    randomNum = Math.floor((Math.random() * (parseMax - parseMin)) + parseMin);
    min.value = parseMin;
    max.value = parseMax;
    console.log("MinNumber: " + parseMin + ",", "MaxNumber: " + parseMax + ",", "RandomNumber: " + randomNum)
  } else if (parseG < randomNum){
    guessDisplay ("That is too low");
  } else {
    guessDisplay ("That is too high");
  }
  eraseInput(userGuess);
})

userGuess.addEventListener('input', function(){
  if (userGuess.value === "") {
    disableBtn(clearBtn, submitBtn)
  } else {
    enableBtn(clearBtn, submitBtn)
  }
})

clearBtn.addEventListener('click', function(){
  eraseInput(userGuess)
  disableBtn(clearBtn)
})

resetBtn.addEventListener('click', function () {
  var lgText = document.querySelector('.lg-text')
  var result = document.querySelector('.result')
  enableBtn(min, max, paramBtn)
  disableBtn(submitBtn, clearBtn, resetBtn)
  eraseInput(userGuess, min, max)
  eraseText(lastGuess, lgText, result)
  lastGuess.innerText = "#"
  randomNum = Math.floor(Math.random() * (parseMax - parseMin) + parseMin)
})

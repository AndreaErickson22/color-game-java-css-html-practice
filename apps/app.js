var numSquares = 6;
var colors = generateRandomColors(numSquares);


var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function () {
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});
hardBtn.addEventListener("click", function () {
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].style.display = "block";
  }
});

resetButton.addEventListener("click", function () {
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick new random color from the array
  pickedColor = pickColor();
  //change colorDisplay to match the picked color
  colorDisplay.textContent = pickedColor;
  this.textContent = "New Colors";
  messageDisplay.textContent = " ";
  //change color of squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue";
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  //add initial colors to the squares
  squares[i].style.backgroundColor = colors[i];
  //add click listener
  squares[i].addEventListener("click", function () {
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    //compare color to picked color

    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again?"
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again"
    }
  });
}
function changeColors(color) {
  //loopthrough all squares
  for (var i = 0; i < squares.length; i++) {
    //change each color
    squares[i].style.backgroundColor = color;

  }
}
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
function generateRandomColors(num) {
  //make an array
  var arr = []
  for (var i = 0; i < num; i++) {
    arr.push(randomColor())
    //get random color and push into the array
  }
  //return that array
  return arr;
}

function randomColor() {
  //pick a red from 0-255, green from 0-255
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  "rgb(r, g, b)"
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

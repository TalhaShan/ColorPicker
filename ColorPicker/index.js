var numSquares = 6;
var colors = generateRandomColors(numSquares);
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var rgbCode = document.getElementById("rgbCode");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var x = document.getElementsByTagName("BODY")[0];
 var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numSquares = 3;
  x.style.backgroundColor = "#232323";
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  rgbCode.textContent = "";
  for(var i = 0; i < square.length; i++) {
    if (colors[i]) {
      square[i].style.background = colors[i];
    } else {
      square[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function(){
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  x.style.backgroundColor = "#232323";
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  rgbCode.textContent = "";
  for(var i = 0; i < square.length; i++) {
      square[i].style.background = colors[i];
      square[i].style.display = "block";
  }
});

resetButton.addEventListener("click", function(){
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from the array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  rgbCode.textContent = "";
  this.textContent = "New Color";
  messageDisplay.textContent = "";
  x.style.backgroundColor = "#232323";

  //change colors of squares
  for (var i = 0; i < square.length; i++) {
    square[i].style.background = colors[i];
  }
  h1.style.background = "steelblue";
})

rgbCode.textContent = "";

for(var i = 0; i < square.length; i++) {
  //add initial colors to squares
  square[i].style.background = colors[i];
  //add click listeners to squares
  square[i].addEventListener("click", function() {
    //grab color of picked square
    var clickedColor = this.style.background;
    //compare color to pickedColor
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Good Job!";
      rgbCode.textContent = pickedColor;
       resetButton.textContent = "Play Again ?";
       changeColors(clickedColor);
      h1.style.background = clickedColor;
      x.style.backgroundColor = clickedColor;
    }else{
      this.style.background = "#232323";
      x.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  })
}

function changeColors(color){
  //loop through all squares
for (var i = 0; i < square.length; i++) {
    //change each color to match given color
    square[i].style.background = color;
}

}

function pickColor(){
var random = Math.floor(Math.random() * colors.length)
return colors[random];
}

function generateRandomColors(num){
  //make and array
  var arr = []
  //add num random colors to array
  for (var i = 0; i < num; i++) {
    arr.push(randomColor())
    //get random color and push into array
  }
  //return that array
  return arr;
}

function randomColor(){
  //pick a "red" from 0-255
var r = Math.floor(Math.random() * 256)
  //pick a "green" from 0-255
var g = Math.floor(Math.random() * 256)
  //pick a "blue" from 0-255
var b = Math.floor(Math.random() * 256)

return "rgb(" + r +", " + g + ", " + b +")";
}

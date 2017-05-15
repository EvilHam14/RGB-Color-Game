var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}
function setupModeButtons(){
			//modebuttons
	for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
	//ADD CLICK LISTENERS TO SQUARES
	squares[i].addEventListener("click", function(){
		//GRAB PICKED COLOR CODE
		var clickedColor = this.style.background;
		//COMPARE TO THE PICKEDCOLOR
		if(clickedColor == pickedColor){
			messageDisplay.textContent = "Correct!";
			//PLAY AGAIN TEXT
			resetButton.textContent = "PLAY AGAIN?";
			changeColors(clickedColor);
		}
		else{
			this.style.background = "#252525";
			messageDisplay.textContent = "Try Again";
		}

		})
	}
}
	function reset(){
	//GENERATE ALL NEW COLORS
	colors = generateRandomColors(numSquares);
	//PICK ANEW RANDOM COLOR FROM ARRAY
	pickedColor = pickColor();
	//CHANGE SPAN
	messageDisplay.textContent = "";
	//CHANGE COLOR DISPLAY TO MATCH PICKED COLOR
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	//CHANGE COLORS OF SQUARES
	for (var i = squares.length - 1; i >= 0; i--) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.background = "none";
				}
		}
		//RESET H1 BACKGROUND
	h1.style.background = "steelblue";
	};



// easyBtn.addEventListener("click", function(){
// 	//NO SPAN CONETNT
// 	messageDisplay.textContent = "";
// 	//RESET H1 BACKGROUND
// 	h1.style.background = "steelblue";
// 	//Change Square Setting
// 	numSquares = 3;
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	colors=generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click", function(){
// 	//NO SPAN CONETNT
// 	messageDisplay.textContent = "";
// 	//RESET H1 BACKGROUND
// 	h1.style.background = "steelblue";
// 	//Change Square Setting
// 	numSquares = 6;
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	colors=generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 			squares[i].style.display = "block";
// 		}
// 	}
// });

resetButton.addEventListener("click", function(){
	reset();
});


function changeColors(color){
	//LOOP THROUGH ALL SQUARES
	for (var i = squares.length - 1; i >= 0; i--) {
		//CHANGE EACH COLOR TO MACH GIVEN COLOR
		squares[i].style.background = color;

	}
	h1.style.background = color;
};


function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
};

function generateRandomColors(num){
	//MAKE AN ARRAY
	var arr = [];
	//ADD NUM RANDOM COLORS TO ARRAY
	for (var i = 0; i < num; i++) {
	//GET RANDOM COLOR AND PUSH INTO ARRAY
	arr.push(randomColor());
	}
	//RETURN ARRAY
	return arr;

};


function randomColor(){
	//PICK A 'RED' FROM 0 - 255
	var r = Math.floor(Math.random()* 256);
	//PICK A 'GREEN' FROM 0 - 255
	var g = Math.floor(Math.random()* 256);
	//PICK A 'BLUE' FROM 0 - 255
	var b = Math.floor(Math.random() * 256);
	//CREATING LONG STRING
	return "rgb(" + r + ", " + g + ", " + b + ")";
}





colorDisplay.textContent = pickedColor;


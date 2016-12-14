var circles= document.getElementsByClassName("circle");
var score= document.getElementById("score");
var time_remaing = document.getElementById("time_remaining");
var number= 0;
var time = 5;

var countdownIntervalId;


document.onload=start();
function start(){
	
	for(var i =0; i < circles.length; i++){
		var circle = circles[i];
		
		circle.addEventListener("click", addPoints)
	}
	
	//Update the screen with the starting time remaining
	time_remaining.innerHTML = time;
	
	// Start with a fresh score of  0
	score.innerHTML = number;
	
	move();
	
	setInterval(move, 1000, false);
	setInterval (move , 500, true);
	
	
	// start counting down the time remaining
	countdownIntervalId = setInterval(countdown, 1000 );
}


function move(special){
	for(var i = 0; i< circles.length ;i++){
		var circle=circles[i];
		
		if(special == true){
			if(circle.id != "red"){
				continue;
			}
		}
		
		var left=Math.floor(Math.random() * 100);
		var top=Math.floor(Math.random() * 100);
		
		circle.style.top = top+"%";
		circle.style.left = left +"%";
	}
	
	
	
}
function addPoints(){
	console.log(event);
	
	var id =event.target.id;
	
	if(id == "red"){
		var points = -100;
	}else{
		var points =50;
	}
	number = number + points;
	
	score.innerHTML =number;
}

function countdown(){
	
	// calculate the new time remaining
	var new_time = time - 1;
	time = new_time;
	
	
	// check to see if time has run outer
	if(time == 0){
		// game over
		
		// stop the countdown timer from running anymore
		clearInterval(countdownIntervalId);
		
		// clear event listenters to make the game not work after time expires
		for(var i =0; i < circles.length; i++){
			var circle = circles[i];
		
		circle.removeEventListener("click", addPoints);
	}
	
	//true or false if they want to play again
	var answer = confirm("DO YOU ACCEPT THE CHALLENGE?");
	if(answer == true) {
		
		// reset score
		number = 0;
		
		// reset time
		time = 5;
		
		// start the game again
		start();
	}
		
	}
	
	// update the screen for the user
	time_remaing.innerHTML = time;
}


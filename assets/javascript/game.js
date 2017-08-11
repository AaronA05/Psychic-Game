//Setting initial values to items for HTML
var wins = 0;
var losses = 0;
var chances = 9;
var userPastGuesses = [];

document.getElementById("wins").textContent = wins;
document.getElementById("losses").textContent = losses;
document.getElementById("chances").textContent = chances;

//Comuter Guess is logged as soon as page loads
 	var cpuGuess = String.fromCharCode(Math.floor(Math.random() * (122- 97) + 97));
 	console.log(cpuGuess);

 	var userKey = null;



//User will be prompted to guess from HTML. This will log user guesses to userGuess function

	document.onkeyup = function(event){
		var userKey = event.key.toLowerCase();
	//Check if userKey is in the alpahbet and has not been keyed already
	//Add guess to the array in HTML
		if (event.keyCode >= 65 && event.keyCode <= 90 && userPastGuesses.indexOf(userKey) < 0){
			userPastGuesses.push(userKey);
			document.getElementById("userPastGuesses").textContent = userPastGuesses;
				if (cpuGuess != userKey){
					chances--;
					}
		}

	//Evaluate the guesses
		if (cpuGuess === userKey){
			wins++;
			chances = 9;
			userPastGuesses = [];
			cpuGuess = String.fromCharCode(Math.floor(Math.random() * (122- 97) + 97));
			console.log(cpuGuess);
			alert("Congrats you got it right!");
		} 
		if (chances === 0){
				losses++;
				chances = 9;
				userPastGuesses = [];
				alert("Sorry the computer was thinking of " + cpuGuess + ". Try again!");
				cpuGuess = String.fromCharCode(Math.floor(Math.random() * (122- 97) + 97));
				console.log(cpuGuess);
				
		}
	

		//Document the score for HTML
		document.getElementById("userPastGuesses").textContent = userPastGuesses;
		document.getElementById("wins").textContent = wins;
		document.getElementById("losses").textContent = losses;
		document.getElementById("chances").textContent = chances;
	} 




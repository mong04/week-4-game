$(document).ready(function() {

	// Function to generate goal #
	function getRandomValue() {
		return Math.floor(Math.random() * 101) + 19;
	}

	// function to update board after clicks
	function update() {
		$("#points").html(score);
		$("#goal-number").text("Reach " + pointGoal + " points.");
		$("#wins").text("Wins: " + wins);
		$("#losses").text("Losses: " + losses);
	}

	// function to generate Crystal Values and assign them to each crystal
	function assignGemValues() {
		for (i = 0; i < 5; i++) {
			var crystalGen = Math.floor(Math.random() *(11)) + 1;
			$("#crystal" + i).data("value", crystalGen);
		};
	}

	// function to run when user wins
	function win(){
		wins++;
		$("#alert").text("");
		getRandomValue();
		pointGoal = getRandomValue();
		assignGemValues();
		score = 0;
		update();
	}

	// function to run when user loses
	function lose(){
		$("#alert").text("");
		losses++;
		getRandomValue();
		pointGoal = getRandomValue();
		assignGemValues();
		score = 0;
		update();
	}
	// generate initial values for crystals
	assignGemValues();
	
	// initial declaration of variables and write to page
	var pointGoal = getRandomValue();
	var wins = 0;
	var losses = 0;
	var score = 0;
	update();

	//Game logic
	$(".crystal").click(function(){
		var crystalValue = $(this).data("value");
		if (score < pointGoal) {
			score = score + crystalValue;
			update();
			if (score === pointGoal) {
				$("#alert").text("You Win!");
				setTimeout(win, 2000);
			}
			else if (score > pointGoal) {
				$("#alert").text("You Lose!");
				setTimeout(lose, 2000);
			}
		}
	})


});
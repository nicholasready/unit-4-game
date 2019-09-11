$(document).ready(function () {


    // ... Generate a random number between 19 and 120:
    var randomNumber = Math.floor(Math.random() * 101) + 19;

    // ... and then dump the random number into our random-number div.
    $("#randomNumberField").html(randomNumber);

    //give the crystals a random value 1-12   
    var crystal1 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    var crystal2 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    var crystal3 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    var crystal4 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
 
    //set initial scores to 0
    var wins = 0;
    var losses = 0;

    //set the Total Score to zero and add it to the page using the JQuery syntax
    var totalScore = 0;
    $("#totalScore").text(totalScore);

    //Create a function called "win" that adds a point to win, adds it to its respective field, and then resets the game with new values
    function win() {
        wins++;
        $("#wins").text(wins);
        reset();
    }
//Create a function called "lose" that addes a point to the losses field, then adds it to its respective field, and resets.
    function lose() {
        losses++;
        $("#losses").text(losses);
        reset();
    }

    //Create a click event for the crystals that adds its random value to the TotalScore. If the click event makes the RandomNumber = totalScore then run the win and reset functions
    $("#crystal1").on("click", function () {
        totalScore = totalScore + crystal1;
        $("#totalScore").text(totalScore);
        if (totalScore == randomNumber) {
            win();
            reset();
        } else if (totalScore > randomNumber) {
            lose();
            reset();
        }

    });


    $("#crystal2").on("click", function () {
        totalScore = totalScore + crystal2;
        $("#totalScore").text(totalScore);
        if (totalScore == randomNumber) {
            win();
            reset();
        } else if (totalScore > randomNumber) {
            lose();
            reset();
        }


    });

    $("#crystal3").on("click", function () {
        totalScore = totalScore + crystal3;
        $("#totalScore").text(totalScore);
        if (totalScore == randomNumber) {
            win();
            reset();
        } else if (totalScore > randomNumber) {
            lose();
            reset();
        }

    });

    $("#crystal4").on("click", function () {
        totalScore = totalScore + crystal4;
        $("#totalScore").text(totalScore);
        if (totalScore == randomNumber) {
            win();
            reset();
        } else if (totalScore > randomNumber) {
            lose();
            reset();
        }

    })

    //Create one large reset function that sets the TotalScore to 0, and randomizes the crystal values and randomNumber.
    function reset() {
        totalScore = 0;
        $("#totalScore").text(totalScore);
        randomNumber = Math.floor(Math.random() * 101) + 19;
        $("#randomNumberField").html(randomNumber);
        crystal1 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        crystal2 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        crystal3 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        crystal4 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    }



});
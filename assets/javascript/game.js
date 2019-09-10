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

    var wins = 0;
    var losses = 0;

    var totalScore = 0;
    $("#totalScore").text(totalScore);

    $("#crystal1").on("click", function () {
        totalScore = totalScore + crystal1;
        $("#totalScore").text(totalScore);
    });

    $("#crystal2").on("click", function () {
        totalScore = totalScore + crystal2;
        $("#totalScore").text(totalScore);
    });

    $("#crystal3").on("click", function () {
        totalScore = totalScore + crystal3;
        $("#totalScore").text(totalScore);
    });
    
    $("#crystal4").on("click", function () {
        totalScore = totalScore + crystal4;
        $("#totalScore").text(totalScore);
    })



});
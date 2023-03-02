var colors = ["red", "blue", "green", "yellow"];
var colorPattern = [];
var clickedPattern = [];
var randomNumber;
var level = 1;
var greensound = new Audio("./sounds/green.mp3");
var bluesound = new Audio("./sounds/blue.mp3");
var redsound = new Audio("./sounds/red.mp3");
var yellowsound = new Audio("./sounds/yellow.mp3");
var wrongsound = new Audio("./sounds/wrong.mp3")


function start() {
    function nextSequence() {
        clickedPattern = []
        randomNumber = Math.floor(Math.random() * 4);
        var randomPicked = colors[randomNumber];
        colorPattern.push(randomPicked);
        showAnimtion("#" + randomPicked)
        level = colorPattern.length;
        $("h1").text("Level " + level);
        playSound(randomPicked);
    }

    function checkIfSubmitted() {
        $(".start-butt").click(function () {
            setTimeout(() => {
                nextSequence();
                $(".replay").slideUp();
                $(".start-butt").fadeOut();
            }, 500);
        })
    }


    $("#green").click(function () {
        showAnimtion("#green")
        clickedPattern.push("green")
        playSound("green");
        checkSequence();
    })
    $("#red").click(function () {
        showAnimtion("#red")
        clickedPattern.push("red")
        playSound("red");
        checkSequence();
    })
    $("#yellow").click(function () {
        showAnimtion("#yellow")
        clickedPattern.push("yellow")
        playSound("yellow");
        checkSequence();
    })
    $("#blue").click(function () {
        showAnimtion("#blue")
        clickedPattern.push("blue")
        playSound("blue");
        checkSequence();
    })


    function checkSequence() {
        var lol = 0;
        for (var i = 0; i < clickedPattern.length; i++) {
            if (colorPattern[i] != clickedPattern[i]) {
                lol = 0;
                break;
            }
            else if (clickedPattern.length == colorPattern.length) {
                lol = 1;
            }
        }
        if (lol == 1)
            setTimeout(() => {
                nextSequence();
            }, 1000);
        else {
            gameOver();
            return;
        }

    }

    function playSound(buttonColor) {
        if (buttonColor == "green")
            greensound.play();
        else if (buttonColor == "red")
            redsound.play();
        else if (buttonColor == "blue")
            bluesound.play();
        else
            yellowsound.play();
    }
    function showAnimtion(animatedID) {
        $(animatedID).addClass("pressed");
        setTimeout(() => {
            $(animatedID).removeClass("pressed")
        }, 150);
    }

    checkIfSubmitted();
}
start();
function gameOver() {
    setTimeout(() => {
        wrongsound.play();
        $("body").css("background-color", "red")
        $("h1").text("Game Over, Play again? Click the button below!")
    }, 400);

    setTimeout(() => {
        $("body").css("background-color", "#011F3F");
        $(".replay").slideDown();
    }, 600);


}
var images = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png",
];
//Generate a random number b/w 1 to 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//Get all HTML Image element on the page
var imageElements = document.querySelectorAll("img");

//Set the image for the left hand image element
imageElements[0].setAttribute("src", images[randomNumber1-1]);
//Set the image for the right hand image element
imageElements[1].setAttribute("src", images[randomNumber2-1]);

//Decide winner based on Score
var finalScore = "Draw!";
if(randomNumber1 > randomNumber2) {
    finalScore = "Player 1 Wins!";
}else if(randomNumber2 > randomNumber1) {
    finalScore = "Player 2 Wins!";
}
document.querySelector("h1").innerHTML = finalScore;
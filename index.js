var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);
var randomImage = "https://github.com/WebsiteTestings/Dicee_Challenge/blob/main/images/dice1.PNG" ;
console.log(randomImage);
document.querySelector(".img1").setAttribute("src", randomImage);

//second image
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);
var randomImage2 = "https://github.com/WebsiteTestings/Dicee_Challenge/blob/main/images/dice" + randomNumber2 + ".PNG";
console.log(randomImage2);
document.querySelector(".img2").setAttribute("src", randomImage2);

//Announce Winner
var winner = document.querySelector("h1");
console.log(winner);
if (randomNumber1 > randomNumber2) {
  winner.innerHTML = "Player 1 Win's";
} else if (randomNumber1 === randomNumber2) {
  winner.innerHTML = "Draw !";
} else if (randomNumber1 < randomNumber2) {
  winner.innerHTML = "Player 2 Win's";
}

let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomDiceMG = "dice" + randomNumber1 + ".png";
let randomImgSrc = "images/" + randomDiceMG;
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImgSrc);

let randomDiceMG2 = "dice" + randomNumber2 + ".png";
let randomImgSrc2 = "images/" + randomDiceMG2;
let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImgSrc2);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h3").innerHTML = "Winner: Player 1";
} else if(randomNumber2 > randomNumber1) {
    document.querySelector("h3").innerHTML = "Winner: Player 2";
} else {
    document.querySelector("h3").innerHTML = "Nobody Wins. It's A Tie.";
}







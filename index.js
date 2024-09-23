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




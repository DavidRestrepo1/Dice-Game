var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

switch(randomNumber1) {
    case 1:
        document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
        break;
    case 2:
        document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
        break;
    case 3:
        document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
        break;
    case 4:
        document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
        break;
    case 5:
        document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
        break;
    default:
        document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
        break;
}

switch(randomNumber2) {
    case 1:
        document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
        break;
    case 2:
        document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
        break;
    case 3:
        document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
        break;
    case 4:
        document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
        break;
    case 5:
        document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
        break;
    default:
        document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
        break;
}

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "CHALLENGER 1 IS VICTORIOUS!"
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "CHALLENGER 2 IS VICTORIOUS!"
}
else {
    document.querySelector("h1").innerHTML = "AGAIN!"
}

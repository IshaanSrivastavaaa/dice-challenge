var random1= (Math.floor(Math.random()*6)+1);
var dice1 = "images/dice"+random1+".png";
var imagesource1= document.querySelectorAll("img")[0];

imagesource1.setAttribute("src",dice1);


var random2= (Math.floor(Math.random()*6)+1);
var dice2 = "images/dice"+random2+".png";
var imagesource2= document.querySelectorAll("img")[1];
imagesource2.setAttribute("src",dice2);

if(random1>random2){
    document.querySelector("h1").innerHTML= "Player 1 wins!";
}
else if(random1<random2){
    document.querySelector("h1").innerHTML= "Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML= "Draw!";
}
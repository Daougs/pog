var canvas, backgroundImage;

var p
var playerRank = 0
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var car11Img, car21Img, car31Img, car41Img
var cars, car1, car2, car3, car4;
function preload(){
track= loadImage("images/track.jpg")
car21Img = loadImage("images/car2.png")
car11Img = loadImage("images/car1.png")
car31Img = loadImage("images/car3.png")
car41Img = loadImage("images/car4.png")
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end()
  }
}

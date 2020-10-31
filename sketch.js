var database;
var game, form, player;
var gameState, playerCount, allPlayerInformation;
var car1, car2, car3, car4, allCars;
var car1img, car2img, car3img, car4img;
var trackimg;

function preload(){
  car1img = loadImage('images/car1.png');
  car2img = loadImage('images/car2.png');
  car3img = loadImage('images/car3.png');
  car4img = loadImage('images/car4.png');
  trackimg = loadImage('images/track.jpg');
}


function setup(){
  database = firebase.database();
  createCanvas(displayWidth,displayHeight);

  gameState = 0;

  game = new Game();
  game.getGameState();
  game.createForm();

  car1 = createSprite(10,10,100,100);
  car2 = createSprite(10,10,100,100);
  car3 = createSprite(10,10,100,100);
  car4 = createSprite(10,10,100,100);

  car1.addImage(car1img);
  car2.addImage(car2img);
  car3.addImage(car3img);
  car4.addImage(car4img);

  allCars = [car1,car2,car3,car4];
}

function draw(){
  if(playerCount == 4){
    game.setGameState(1);
  }

  if(gameState == 1){
    clear();
    game.play();
  }

  if(gameState == 2){
    game.end();
  }
}

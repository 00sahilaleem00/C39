var database;
var game, form, player;
var gameState, playerCount, allPlayerInformation;
var car1, car2, car3, car4, allCars;


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
}

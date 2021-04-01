var gamestate=0
var playerCount
var database

function setup() {
  createCanvas(800,800);
  database=firebase.database()
  game=new Game()
  game.getState()
  game.start()
}

function draw() {
  background("black");  
  if (playerCount===2){
    game.update(1)
  }
  //if (gamestate===1){
    //clear()
    //game.play()
  //}
}
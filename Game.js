class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var plrRef = await database.ref('playerCount').once("value");
      if(plrRef.exists()){
      playerCount = plrRef.val();
player.getCount();
      }
      form = new Form();
      form.display();
    }
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100);
    Player.getInfo();
    if(allPlayers !== undefined){
var displayPosition = 130;

displayPosition += 20;
textSize(15);
text(allPlayers[plr].name + ":" + allPlayers[plr].distance, 120, displayPostion);
}

if(keyIsDown(UP_ARROW) && player.index !== null){
  player.distace += 50;
  player.update();
}
  } 
}
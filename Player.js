class Player {
  constructor(){
    this.index = null;
    this.distace = 0;
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data) => {
      playerCount = data.val();
    });
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
  
  static getInfo(){
    var ref = database.ref("players");
    ref.on("value", (data) => {
      allPlayers = data.val();
    });
  }
}

class Game{
    constructor(){

    }
    getState(){
        var gamestateRef=database.ref("gamestate")
        gamestateRef.on("value",function(data){
            gamestate=data.val()
        })
    }
    update(state){
        database.ref("/").update({
            gamestate:state
        })
    }
    async start(){
        if (gamestate===0){
            player=new Player()
            var playerCountRef=await database.ref("playerCount").once("value")
            if (playerCountRef.exists()){
                playerCount=playercountRef.val()
                player.getCount()
            }
            form=new Form()
            form.display()
        }
        line1=createSprite(300,500,20,300)
    }
    play(){
      form.hide()
      drawSprites()
}
    }
    
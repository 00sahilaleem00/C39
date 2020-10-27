class Game {
    constructor(){

    }

    getGameState(){
        var ref = database.ref('gameState');
        ref.on('value', function(data){
            gameState = data.val();
        });
    }

    setGameState(state){
        var ref = database.ref('/');
        ref.update({
            gameState: state
        });
    }

    createForm(){
        if(gameState == 0){
            form = new Form();
            form.display();
            player = new Player();
            player.getCount();
        }
    }

    play(){
        form.hide();
        textSize(30);
        text("GAME START", 120, 100);

        Player.getInformation();

        if(allPlayerInformation != undefined){

            var carIndex = 0;
            var xposition = displayWidth/8;
            var yposition;

            for(var plr in allPlayerInformation){
                if(player.index === (carIndex+1)){
                    allCars[carIndex].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = allCars[carIndex].y;

                }

                allCars[carIndex].x = xposition;
                xposition += displayWidth/4;
                yposition = displayHeight - allPlayerInformation[plr].distance;
                allCars[carIndex].y = yposition;
                carIndex += 1;

            }
        }
        
        if(keyIsDown(UP_ARROW) && player.index != null){
            player.distance += 50;
            player.update();
        }

        drawSprites();
    }

}
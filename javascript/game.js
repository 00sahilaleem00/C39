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
        push();
        imageMode(CENTER);
        image(trackimg,displayWidth/2,(displayHeight-(7848/2)),displayWidth,7848);
        pop();

        Player.getInformation();

        if(allPlayerInformation != undefined){

            var carIndex = 0;
            var xposition = displayWidth/8;
            var yposition;

            for(var plr in allPlayerInformation){
                

                allCars[carIndex].x = xposition;
                xposition += displayWidth/4;
                yposition = displayHeight - allPlayerInformation[plr].distance;
                allCars[carIndex].y = yposition;

                if(player.index === (carIndex+1)){
                    rectMode(CENTER);
                    rect(allCars[carIndex].x,allCars[carIndex].y,80,160);
                    camera.position.x = displayWidth/2;
                    camera.position.y = allCars[carIndex].y;
                }

                if(allCars[carIndex].y<-6700){
                    gameState = 2;
                }
                carIndex += 1;
            }
        }
        
        if(keyIsDown(UP_ARROW) && player.index != null){
            player.distance += 50;
            player.update();
        }
        
        drawSprites();
    }

    end(){
        console.log(gameState);
    }

}
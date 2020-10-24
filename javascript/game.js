class Game {
    constructor(){

    }

    getGameState(){
        var ref = database.ref('gameState');
        ref.on('value', function(data){
            gameState = data.val();
        } );
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
            //var display_position = 130;
            var carIndex = 0;
            var xposition = displayWidth/8;
            var yposition;

            for(var plr in allPlayerInformation){
                /*if(plr == "player" + player.index){
                    fill("red");
                }
                else{
                    fill("black");
                }
                display_position += 20;
                textSize(15);
                text(allPlayerInformation[plr].name + ": " + allPlayerInformation[plr].distance, 120, display_position);*/

                allCars[carIndex].x = xposition;
                xposition += displayWidth/4;
                yposition = displayHeight - allPlayerInformation[plr].distance;
                allCars[carIndex].x = yposition;

            }
        }

        if(keyIsDown(UP_ARROW) && player.index != null){
            player.distance += 50;
            player.update();
        }
    }

}
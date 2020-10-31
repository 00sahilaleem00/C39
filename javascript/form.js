class Form {
    constructor(){
        this.input = createInput('PLEASE ENTER NAME');
        this.button = createButton('ENTER');
        this.greeting = createElement('h3');
        this.reset = createButton('RESET');
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display(){
        var title = createElement('h2');
        title.html('CAR RACE!');
        title.position(100,400);

        this.input.position(130,160);
        this.button.position(250,200);
        this.reset.position(250,300);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();

            playerCount += 1;
            player.index = playerCount;

            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello "+name);
            this.greeting.position(130,160);
        });

        this.reset.mousePressed(()=>{
            database.ref('/').update({
                gameState: 0,
                playerCount:0
            });
        });
    }
}
class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2');
        title.html("Car Racing Game!!");
        title.position(130,0);

        var inputbox = createInput("name");
        inputbox.position(130,160);

        var button = createButton("ENTER");
        button.position(250,200);

        var greeting = createElement('h4');
        
        button.mousePressed(function(){
            inputbox.hide();
            button.hide();
            var name = inputbox.value();
            playercount++;
            player.updateplayername(name);
            player.updateplayercount(playercount);
         

            greeting.html("Welcome " + name);
            greeting.position(130,160);

        })



        


    }

}
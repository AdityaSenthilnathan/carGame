var gamestate = 0, playercount = 0;
var form, player, game;
var database;

function setup(){
    var canvas = createCanvas(500,500);
    database = firebase.database();
    game = new Game();
    game.getGameState();
    game.start();

}
function draw(){



}



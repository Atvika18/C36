
var db;
var form, player, game;
var gameState = 0;
var playerCount = 0;

function setup(){
    db = firebase.database();
    createCanvas(500,500);
    game = new Game()
    game.getState()
    game.start()
}

function draw(){
    background("white");
    
}


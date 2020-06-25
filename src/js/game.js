(function() {
    "use strict";
//--------
// Classes
//--------

//--------
//  Settings
//--------
    const Game = new GAME("gameCanvas", "gameContainer", 400, 350, 30);
    const ctx = Game.CONTEXT;
    const gW = Game.STAGE.width;
    const gH = Game.STAGE.height;

//--------
//  Functions
//--------
    Game.update = function() {}

    Game.draw = function() {
        // Draw stuff here
        ctx.clearRect(0, 0, gW, gH);

        // Background
            ctx.fillStyle = "rgb(0,0,0)";
            ctx.fillRect(0, 0, gW, gH);
    }

//--------
//  Initiate Game
//--------
    Game.run();
}());
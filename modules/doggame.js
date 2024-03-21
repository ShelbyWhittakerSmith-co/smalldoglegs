var myGamePiece;
var myObstacles = [];
var myScore;

function startGame() {
    myGameArea();
}

var myGameArea = {
    canvas : document.getElementById("canvas")}
    window.onload = function() {
        const ctx = canvas.getContext("2d");
        const img = document.getElementById("scream");
        ctx.drawImage(img, 10, 10);
      };
      

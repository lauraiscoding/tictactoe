let Currentplayer = "O";
let numberofTurns = 0;
let gameEnd = false;

function addTurn(){
    numberofTurns ++;
    $("p").html("Moves" + ":" + numberofTurns);
    if(numberofTurns === 9){
        gameEnd = true;
        
    }
    console.log(gameEnd);
}


function performLogic( button , tile){
    if( Currentplayer === "O" ){
        
        Currentplayer = "X";
    }else{
        Currentplayer = "O"
    }
    addTurn();
    console.log(numberofTurns);
}

$("#button1").click(function() {
    performLogic("#button1","#tile1");
    $("#button1").hide();
    $("#tile1").html(Currentplayer);

});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
    $("#button2").hide();
    $("#tile2").html(Currentplayer);
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
    $("#button3").hide();
    $("#tile3").html(Currentplayer);
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
    $("#button4").hide();
    $("#tile4").html(Currentplayer);
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
    $("#button5").hide();
    $("#tile5").html(Currentplayer);
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
    $("#button6").hide();
    $("#tile6").html(Currentplayer);
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
    $("#button7").hide();
    $("#tile7").html(Currentplayer);
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
    $("#button8").hide();
    $("#tile8").html(Currentplayer);
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
    $("#button9").hide();
    $("#tile9").html(Currentplayer);
});

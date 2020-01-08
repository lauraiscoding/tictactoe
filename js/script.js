let Currentplayer = "O";
let numberofTurns = 0;
let gameEnd = false;

function addTurn(){
    numberofTurns ++;
    $("#moves").html("Moves" + ":" + numberofTurns);
    if(numberofTurns === 9){
        gameEnd = true;
        $("#results").text("Its a draw!");
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

function checkWinner(tile1, tile2, tile3){
    if( $(tile1).text() === "X" && $(tile2).text() === "X" && $(tile3).text() === "X"){
        $("#results").text("X Wins!");
        gameEnd = true;
        $("button").hide();
    } else if( $(tile1).text() === "O" && $(tile2).text() === "O" && $(tile3).text() === "O"){
        $("#results").text("O wins!");
        gameEnd = true;
        $("button").hide();
    }
}


$("#button1").click(function() {
    performLogic("#button1","#tile1");
    $("#button1").hide();
    $("#tile1").html(Currentplayer);
    checkWinner("#tile1","#tile2","#tile3");
    checkWinner("#tile1","#tile4","#tile7");
    checkWinner("#tile1","#tile5","#tile9");
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
    $("#button2").hide();
    $("#tile2").html(Currentplayer);
    checkWinner("#tile1","#tile2","#tile3");
    checkWinner("#tile2","#tile5","#tile8");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
    $("#button3").hide();
    $("#tile3").html(Currentplayer);
    checkWinner("#tile1","#tile2","#tile3");
    checkWinner("#tile3","#tile6","#tile9");
    checkWinner("#tile3","#tile5","#tile7");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
    $("#button4").hide();
    $("#tile4").html(Currentplayer);
    checkWinner("#tile4","#tile5","#tile6");
    checkWinner("#tile1","#tile4","#tile7");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
    $("#button5").hide();
    $("#tile5").html(Currentplayer);
    checkWinner("#tile4","#tile5","#tile6");
    checkWinner("#tile2","#tile5","#tile8");
    checkWinner("#tile1","#tile5","#tile9");
    checkWinner("#tile3","#tile5","#tile7");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
    $("#button6").hide();
    $("#tile6").html(Currentplayer);
    checkWinner("#tile3","#tile6","#tile9");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
    $("#button7").hide();
    $("#tile7").html(Currentplayer);
    checkWinner("#tile7","#tile8","#tile9");
    checkWinner("#tile1","#tile4","#tile7");
   checkWinner("#tile3","#tile5","#tile7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
    $("#button8").hide();
    $("#tile8").html(Currentplayer);
    checkWinner("#tile7","#tile8","#tile9");
    checkWinner("#tile2","#tile5","#tile8");
   
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
    $("#button9").hide();
    $("#tile9").html(Currentplayer);
    checkWinner("#tile7","#tile8","#tile9");
    checkWinner("#tile3","#tile6","#tile9");
    checkWinner("#tile1","#tile5","#tile9");
});

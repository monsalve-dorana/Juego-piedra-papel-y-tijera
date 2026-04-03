var opt_piedra = document.getElementById("piedra");
var opt_papel = document.getElementById("papel");
var opt_tijera = document.getElementById("tijera");

var start = document.getElementById("start_game");

var img_opt_player1 = document.getElementById("player1");
var img_opt_player2 = document.getElementById("player2");
var ptos_player1 = document.getElementById("player1").innerText;
var ptos_player2 = document.getElementById("player2").innerText;


var select_player1;
var select_player2;
var vs;

start.onclick = function() {
    select_player2 = opt_radom(val_opt_radom.toString());
    display_option_player(select_player2);
    game_vs(select_player1,select_player2);

}




opt_piedra.onclick = function(){
    select_player1 = "piedra";
    img_opt_player1.src = "./img/piedra_izquierda.svg";
    img_opt_player2.src = "./img/cpu.svg";
}
opt_papel.onclick = function(){
    select_player1 = "papel";
    img_opt_player1.src = "./img/papel_izquierda.svg";
    img_opt_player2.src = "./img/cpu.svg";
}
opt_tijera.onclick = function(){
    select_player1 = "tijera";
    img_opt_player1.src = "./img/tijera_izquierda.svg";
    img_opt_player2.src = "./img/cpu.svg";
}
val_opt_radom = ["piedra","papel","tijera"]
function opt_radom(){
    return[...val_opt_radom]
    .sort(()=>Math.random()> 0.5 ? 1:-1)
    .slice(0,1);

}

function display_option_player(select_player2) {
    if (select_player2 == "piedra"){
        img_opt_player2.src = "./img/piedra_derecha.svg"
    } else if (select_player2 == "papel"){
        img_opt_player2.src = "./img/papel_derecha.svg"
    } else {
        img_opt_player2.src = "./img/tijera_izquierda.svg"
    }
}

function game_vs(select_player1,select_player2) {
    if (select_player1 == "piedra") {
        if (select_player2 == "piedra") {
            vs = "same";

        }else if (select_player2 == "papel") {
            vs = "p2win";
        }else {
            vs = "p1win";
        }
    }else if (select_player1 == "papel") {
        if (select_player2 == "papel") {
            vs = "same";

        }else if (select_player2 == "tijera") {
            vs = "p2win";
        }else {
            vs = "p1win";
        }
    }else if (select_player1 == "tijera") {
        if (select_player2 == "tijera") {
            vs = "same";
        }else if (select_player2 == "piedra") {
            vs = "p2win";
        }else {
            vs = "p1win";
        }
    }

if(vs == "p1win") {
    document.getElementById("result").innerText = "player 1 gana";
        document.getElementById("result").style.color = "rgb(27, 129, 78)";
        ptos_player1++;
         document.getElementById("ptos_player1").innerText = ptos_player1;
} else if (vs == "same") {
     document.getElementById("result").innerText = "Empate";
        document.getElementById("result").style.color = "rgb(214, 123, 38)";
} else if (vs == "p2win") {
       document.getElementById("result").innerText = "player 2 gana";
        document.getElementById("result").style.color = "rgb(156, 40, 141)";
        ptos_player2++;
         document.getElementById("ptos_player2").innerText = ptos_player2;
}

}

const reload = document.getElementById('reset_game');
reload.addEventListener('click',_=>{
    location.reload();

})
const introPage = document.getElementById("front-page");
const playerVsPlayer = document.getElementById("pvp");
const vsComputer = document.getElementById("vscomputer");


playerVsPlayer.addEventListener("click",function(){
    introPage.className= "frontpage-hide";
    names()
})








function names(){
    let firstPlayerName = prompt("First Player Name","Full-Name");
    let secondPlayerName = prompt("Second Player","Full-Name");
    if(firstPlayerName != null){
        document.getElementById("playerone").innerHTML = "Player 1:" + firstPlayerName;
    }else{
        document.getElementById("playerone").innerHTML = "Player 1: No Name";
    }
    if(secondPlayerName != null){
        document.getElementById("playertwo").innerHTML = "Player 2:" + secondPlayerName;
    }else{
        document.getElementById("playertwo").innerHTML = "Player 2: No Name"
    }
}

var x = document.getElementById("myAudio");
x.autoplay = true;
x.load(); 
function computer(){
    const com = Math.floor(Math.random() * 3)+1;
        if(com == 1)
            return 'rock';
        if(com == 2)
            return 'paper';
            return 'scissors';
}
var scores = 0
function getResult(com , player){
    document.getElementById('hasil').innerHTML = "<h1></h1>"
    var result =''
   
    if(player == com) result = 'DRAW!'; 
    else if(player == "paper" && com == "rock")result = 'WIN!';
    else if(player == "rock" && com == "paper")result = 'LOSE!';
    else if(player == "scissors" && com == "paper")result = 'WIN!';
    else if(player == "paper" && com == "scissors")result = 'LOSE!';
    else if(player == "rock" && com == "scissors") result = 'WIN!';
    else if(player == "scissors" && com == "rock") result = 'LOSE!';
   
    if(result == 'WIN!') scores += 3;
    else if(result == 'DRAW!')scores += 0;
    else if(result == 'LOSE!')scores -= 2;

    document.getElementById('nilai').innerHTML = "<h2>" + `Scores : ${scores}` + "</h2>"
    document.getElementById('hasil').innerHTML = "<h1>" + result + "</h1>"
}

function start(choose){
    const computerChoose = computer();
    if(computerChoose=="rock")
        document.getElementById('paperc').setAttribute('src','img/'+computerChoose + '.jpeg')
    else
        document.getElementById('paperc').setAttribute('src','img/'+computerChoose + '.png')
    getResult(computerChoose,choose)
    console.log('com : ' + computerChoose);
    console.log('player :' + choose);
    
}
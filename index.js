var ainum = Math.floor((Math.random() * 5) + 1);
let userinput;
let aiplayed;
let gameto;
let result = 'Play to find out who will hullo!'

function reload(){
    window.location.reload();
}

//1 = rock; 2 = paper; 3 = scissors; 4 = lizard; 5 = spock
function rock(){
    document.getElementById('picker').innerHTML = 'You chose Rock!';
    var userinput = 'rock';
    if (ainum == 1){
        var aiplayed = 'The AI played Rock';
        var result = "It's a draw!";
        var gameto = null;
    }
    else if (ainum == 2){
        var aiplayed = 'The AI played Paper';
        var result = 'The AI has won! Paper covers Rock.';
        var gameto = 'AI';
    }
    else if (ainum == 3){
        var aiplayed = 'The AI played Scissors';
        var result = 'You won! Rock crushes Scissors.'
        var gameto = 'human';
    }
    else if (ainum = 4){
        var aiplayed = 'The AI played Lizard';
        var result = 'You won! Rock crushes Lizard'
        var gameto = 'human';
    }
    else if (ainum = 5){
        var aiplayed = 'The AI played Spock';
        var result = 'The AI won! Spock vaporizes Rock.';
        var gameto = 'AI';
    }
    document.getElementById('result').innerHTML = result;
    document.getElementById('aiplayed').innerHTML = aiplayed;
    document.getElementById('replay').style.display = 'block';
    if (gameto == 'human'){
        document.getElementById('speech').innerHTML = 'Once again, my human side is a side that I am proud of.';
        document.getElementById('speech').style.display = 'block';
    }
    else if (gameto == 'AI'){
        document.getElementById('speech').innerHTML = 'Once Again, logic outplays the emotional human brain.' 
        document.getElementById('speech').style.display = 'block';
    }
}

function paper(){
    document.getElementById('picker').innerHTML = 'You chose Paper!';
    var userinput = 'paper';
    if (ainum == 1){
        var aiplayed = 'The AI played Rock';
        var result = "You won! Paper covers Rock.";
        var gameto = 'human';
    }
    else if (ainum == 2){
        var aiplayed = 'The AI played Paper';
        var result = "It's a draw!";
    }
    else if (ainum == 3){
        var aiplayed = 'The AI played Scissors';
        var result = 'The AI has won! Scissors cut Paper.';
        var gameto = 'AI';
    }
    else if (ainum = 4){
        var aiplayed = 'The AI played Lizard';
        var result = 'The AI has won! Lizard eats Paper.';
        var gameto = 'AI';
    }
    else if (ainum = 5){
        var aiplayed = 'The AI played Spock';
        var result = 'You won! Paper disproves Spock.';
        var gameto = 'human';
    }
    document.getElementById('result').innerHTML = result;
    document.getElementById('aiplayed').innerHTML = aiplayed;
    document.getElementById('replay').style.display = 'block';
    if (gameto == 'human'){
        document.getElementById('speech').innerHTML = 'Once again, my human side is a side that I am proud of.';
        document.getElementById('speech').style.display = 'block';
    }
    else if (gameto == 'AI'){
        document.getElementById('speech').innerHTML = 'Once Again, logic outplays the emotional human brain.' 
        document.getElementById('speech').style.display = 'block';
    }
}
function scissors(){
    document.getElementById('picker').innerHTML = 'You chose Scissors!';
    var userinput = 'scissors';
    if (ainum == 1){
        var aiplayed = 'The AI played Rock';
        var result = "The AI won! Rock crushes Scissors.";
        var gameto = 'AI';
    }
    else if (ainum == 2){
        var aiplayed = 'The AI played Paper';
        var result = "You won! Scissors cuts Paper.";
        var gameto = 'human';
    }
    else if (ainum == 3){
        var aiplayed = 'The AI played Scissors';
        var result = "It's a draw!"
    }
    else if (ainum = 4){
        var aiplayed = 'The AI played Lizard';
        var result = 'You won! Scissors decapitates Lizard.';
        var gameto = 'human';
    }
    else if (ainum = 5){
        var aiplayed = 'The AI played Spock';
        var result = 'The AI has won! Spock smashes Scissors.';
        var gameto = 'AI';
    }
    document.getElementById('result').innerHTML = result;
    document.getElementById('aiplayed').innerHTML = aiplayed;
    document.getElementById('replay').style.display = 'block';
    if (gameto == 'human'){
        document.getElementById('speech').innerHTML = 'Once again, my human side is a side that I am proud of.';
        document.getElementById('speech').style.display = 'block';
    }
    else if (gameto == 'AI'){
        document.getElementById('speech').innerHTML = 'Once Again, logic outplays the emotional human brain.' 
        document.getElementById('speech').style.display = 'block';
    }
}
function lizard(){
    document.getElementById('picker').innerHTML = 'You chose Lizard!';
    var userinput = 'lizard';
    if (ainum == 1){
        var aiplayed = 'The AI played Rock';
        var result = "The AI won! Rock crushes Lizard.";
        var gameto = 'AI';
    }
    else if (ainum == 2){
        var aiplayed = 'The AI played Paper';
        var result = "You won! Lizard eats Paper.";
        var gameto = 'human';
    }
    else if (ainum == 3){
        var aiplayed = 'The AI played Scissors';
        var result = "The AI won! Scissors decapitates Lizard.";
        var gameto = 'AI';
    }
    else if (ainum = 4){
        var aiplayed = 'The AI played Lizard';
        var result = "It's a draw!"
    }
    else if (ainum = 5){
        var aiplayed = 'The AI played Spock';
        var result = 'You won! Lizard poisons Spock.';
        var gameto = 'human';
    }
    document.getElementById('result').innerHTML = result;
    document.getElementById('aiplayed').innerHTML = aiplayed;
    document.getElementById('replay').style.display = 'block';
    if (gameto == 'human'){
        document.getElementById('speech').innerHTML = 'Once again, my human side is a side that I am proud of.';
        document.getElementById('speech').style.display = 'block';
    }
    else if (gameto == 'AI'){
        document.getElementById('speech').innerHTML = 'Once Again, logic outplays the emotional human brain.' 
        document.getElementById('speech').style.display = 'block';
    }
}
function spock(){
    document.getElementById('picker').innerHTML = 'You chose Spock!';
    var userinput = 'spock';
    if (ainum == 1){
        var aiplayed = 'The AI played Rock';
        var result = "You won! Spock vaporizes Rock.";
        var gameto = 'human';
    }
    else if (ainum == 2){
        var aiplayed = 'The AI played Paper';
        var result = "The AI won! Paper disproves Spock.";
        var gameto = 'AI';
    }
    else if (ainum == 3){
        var aiplayed = 'The AI played Scissors';
        var result = "You won! Spock smashes Scissors.";
        var gameto = 'human';
    }
    else if (ainum = 4){
        var aiplayed = 'The AI played Lizard';
        var result = "The AI won! Lizard poisons Spock.";
        var gameto = 'AI';
    }
    else if (ainum = 5){
        var aiplayed = 'The AI played Spock';
        var result = "It's a draw!";
    }
    document.getElementById('result').innerHTML = result;
    document.getElementById('aiplayed').innerHTML = aiplayed;
    document.getElementById('replay').style.display = 'block';
    if (gameto == 'human'){
        document.getElementById('speech').innerHTML = 'Once again, my human side is a side that I am proud of.';
        document.getElementById('speech').style.display = 'block';
    }
    else if (gameto == 'AI'){
        document.getElementById('speech').innerHTML = 'Once Again, logic outplays the emotional human brain.' 
        document.getElementById('speech').style.display = 'block';
    }
}

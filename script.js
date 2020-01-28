let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById('userScore');
const computerScore_span=document.getElementById('computerScore');
const scoreboard_div=document.querySelector('.scoreboard');

const computerChoices=document.getElementById('computerChoices');
const userChoices=document.getElementById('userChoices');

const computerRockImg=document.getElementById('cr');
const computerPaperImg=document.getElementById('cp');
const computerScissors_img=document.getElementById('cs');
const userRock_img=document.getElementById('ur');
const userPaper_img=document.getElementById('up');
const userScissors_img=document.getElementById('us');

function getComputerChoice() {
    const choices=['cr','cp','cs'];
    return choices[Math.floor(Math.random()*3)]
}

function userChoice() {
   userRock_img.addEventListener('click', function() {
       playRound('ur');
   })

   userPaper_img.addEventListener('click', function () {
       playRound('up');
   })

   userScissors_img.addEventListener('click', function () {
       playRound('us');
   })
}

userChoice();

function playRound(userChoice) {
    computerChoice = getComputerChoice ();
    switch (userChoice+computerChoice) {
        case 'urcr':
        case 'upcp':
        case 'uscs':
            draw(userChoice, computerChoice);
            break;
        case 'urcs':
        case 'upcr':
        case 'uscp':
            win(userChoice, computerChoice);
            break;
        case 'urcp':
        case 'upcs':
        case 'uscr':
            lose(userChoice, computerChoice);
            break;
    }
}

function draw(userChoice, computerChoice) {
    document.getElementById(userChoice).classList.add('orangeEffect');
    setTimeout(function() {
        document.getElementById(userChoice).classList.remove('orangeEffect')}, 1000)
    document.getElementById(computerChoice).classList.add('highlightEffect');
    setTimeout(function () {
        document.getElementById(computerChoice).classList.remove('highlightEffect')}, 1000)
}

function win(userChoice, computerChoice) {
    userScore+=1;
    userScore_span.textContent=userScore;
    document.getElementById(userChoice).classList.add('orangeEffect');
    setTimeout(function() {
        document.getElementById(userChoice).classList.remove('orangeEffect')}, 1000)
    document.getElementById(computerChoice).classList.add('highlightEffect');
    setTimeout(function () {
        document.getElementById(computerChoice).classList.remove('highlightEffect')}, 1000)
}

function lose(userChoice, computerChoice) {
    computerScore+=1;
    computerScore_span.textContent=computerScore;
    document.getElementById(userChoice).classList.add('orangeEffect');
    setTimeout(function() {
        document.getElementById(userChoice).classList.remove('orangeEffect')}, 1000)
    document.getElementById(computerChoice).classList.add('highlightEffect');
    setTimeout(function () {
        document.getElementById(computerChoice).classList.remove('highlightEffect')}, 1000)
    
}
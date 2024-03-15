
function getComputerChoice(){
    let indexChoice = Math.floor(Math.random() * choice.length);
    return choice[indexChoice];  
 } 
      

function playRound(playerSelection,computerSelection){

        computerSelection = getComputerChoice();
        if(playerSelection === 'rock' && computerSelection === 'paper'||
        playerSelection === 'paper'&& computerSelection === 'scissor' ||
        playerSelection === 'scissor' && computerSelection === 'rock'){

        computerScore++;
        showPlayerScore.innerHTML =`${playerScore}`;
        showComputerScore.innerHTML = `${computerScore}`;

        }else if(playerSelection === 'rock' && computerSelection === 'scissor'||
                playerSelection === 'paper'&& computerSelection === 'rock' ||
                playerSelection === 'scissor' && computerSelection === 'paper'){

        playerScore++;
        showPlayerScore.innerHTML =`${playerScore}`;
        showComputerScore.innerHTML = `${computerScore}`;                        
        }else{
        showPlayerScore.innerHTML =`${playerScore}`;
        showComputerScore.innerHTML = `${computerScore}`;
        }

        console.log(playerSelection);
        console.log(computerSelection);
        console.log(playerScore);
        console.log(computerScore);


}

function playGame(){
    
 for (let i = 0; i <buttons.length; i++) {
         buttons[i].addEventListener('click', () => {  
        let choice = i;  

        if (choice === 0 ) {
            playerSelection = 'rock';
        }else if (choice === 1) {
            playerSelection = 'paper'
        }else if (choice === 2) {
            playerSelection = 'scissor'
        } 
               
        playRound(playerSelection,computerSelection);
    });
};  
  }

let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

let initialRound = 0;
let totalRound = 5

let choice = ['rock','paper','scissor'];

const gameResult = document.getElementById('game_result');
const showPlayerScore = document.getElementById('player_score'); 
const showComputerScore = document.getElementById('computer_score');
let buttons = document.querySelectorAll('#btn'); 


    playGame();
    


  




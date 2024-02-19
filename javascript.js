





function getComputerChoice(){

    let choiceValue = ['rock','paper','scissor'];
    let indexChoice = Math.floor(Math.random() * choiceValue.length);
    let computerChoice = choiceValue[indexChoice];
    
    return computerChoice;

}



function playGame(){

   

        function playRound(playerSelection,computerSelection){
  
            playerSelection = prompt('What is your Choice?');
            let playerChoice = playerSelection.toLowerCase();

            if(playerChoice === 'rock' && computerSelection === 'paper'||
            playerChoice === 'paper'&& computerSelection === 'scissor' ||
            playerChoice === 'scissor' && computerSelection === 'rock'){

                computerScore++;

                console.log(`you lose! ${computerSelection} defeat ${playerChoice}`)

            }else if(playerChoice === 'rock' && computerSelection === 'scissor'||
                    playerChoice === 'paper'&& computerSelection === 'rock' ||
                    playerChoice === 'scissor' && computerSelection === 'paper'){

                        playerScore++;

                        console.log(`you win! ${playerChoice} defeat ${computerSelection}`);
                    
            }else{
                console.log('tied!');
            }
            
        }

            for(let i = 0; i < 5; i++){

                playRound(playerSelection,computerSelection);
            }

            if (playerScore > computerScore) {

                alert('You Win THe Game!');
            }else if(playerScore < computerScore){

                alert('You Lose The Game!');
            }else{
                alert('The Game Is Tied!');
            }

            console.log(playerScore);
            console.log(computerScore);
  }

let playerScore = 0;
let computerScore = 0;
let playerSelection = '';
let computerSelection = getComputerChoice();

console.log(playGame());



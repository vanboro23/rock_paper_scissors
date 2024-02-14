
const choiceValue = ['rock','paper','scissor'];



function getComputerChoice(){

    let indexChoice = Math.floor(Math.random() * choiceValue.length);
    let computerChoice = choiceValue[indexChoice];
    
    return computerChoice;

}

console.log(getComputerChoice());

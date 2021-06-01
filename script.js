const myArray = ["rock", "paper", "scissors"];

function computerPlay() {
  return myArray[~~(Math.random() * myArray.length)];

}

function playRound (playerSelection, computerSelection) {
   
 if (playerSelection === computerSelection) {
     console.log('tie');
 }
 else if (computerSelection === 'rock' && playerSelection === 'scissors') {
     console.log('you lose')
 }
 else if (computerSelection === 'rock' && playerSelection === 'paper') {
    console.log('you win')
}
 else if (computerSelection === 'paper' && playerSelection === 'scissors') {
    console.log('you win')
}
else if (computerSelection === 'paper' && playerSelection === 'rock') {
    console.log('you lose')
}
 else if (computerSelection === 'scissors' && playerSelection === 'rock') {
    console.log('you win')
}
else if (computerSelection === 'scissors' && playerSelection === 'paper') {
    console.log('you lose')
}
}
const playerSelection =  prompt('enter rock paper or scissors');
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
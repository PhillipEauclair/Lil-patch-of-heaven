const getUserChoice = userInput => {
 userInput = userInput.toLowerCase(); 
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Error!');
  }
}



function determineWinner(userChoice, computerChoice) {
if (userChoice === computerChoice) {
  return 'The game is a tie!';
} // closing if tie clause!!!
  
else if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
     return 'Computer Won!';
  } else {
     return 'You won!';
 } 
}

else if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'Computer won!';
  } else {
    return 'You won!';
  }
} 
else if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'Computer won!';
  } else {
    return 'You won!';
    
  }
 }
}
const playGame = () => {
    let userChoice = getUserChoice(prompt());
    const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
}
playGame();

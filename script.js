let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

//Write your code below:
// It is a number guessing game. When the game starts, there is a secret number chosen from 0 to 9. which is unknown to both players; user and computer. Now, the user will choose a number and computer will choose a number. Whose number will be closest to the secret number, he will be the winner i.e. either the user(playing this game) or computer.

//generating secret number randomly
const generateTarget = () =>
{
  return Math.floor(Math.random()*10);
}
//input human guess, and generating computer guess and secret number plus printing them to console so that player knows his number, comp guess and secret number.
let humanGuess = 5;
console.log(humanGuess);
let computerGuess = Math.floor(Math.random() * 10);
console.log(computerGuess);
let secretNumber = generateTarget();
console.log(secretNumber);
//calculating user distance and computer distance from secret number by Math.absolute method
// let userDistance = Math.abs(humanGuess-secretNumber);
// let compDistance = Math.abs(computerGuess-secretNumber);

//compare guesses function to determine winner
const compareGuesses = (humanGuess,computerGuess,secretNumber) =>
{   
 //checking that who is winner by Math.absolute method 
  if((Math.abs(humanGuess-secretNumber)) <= (Math.abs(computerGuess-secretNumber)))
    {
      
      return 'You Win!'; // User guess is closer to secret number
    }
  else 
    {
      return 'Computer Wins!';  //Computer guess is closer to secret number
    }
  
}
console.log(compareGuesses(humanGuess,computerGuess,secretNumber));
//updating score after determining the winner
const winner = (compareGuesses(humanGuess,computerGuess,secretNumber)=== 'You Win!' ? 'human' : 'computer');
const updateScore = (winner) =>
{
  if(winner === 'human')
    {
      humanScore += 1;
    }
  else //if computer wins the game then its score will be incremented
    {
      computerScore += 1;
    }
}
//updateScore can also be written as follows
//const updateScore = winner => (winner === 'human') ? humanScore++ : computerScore++ ;
updateScore(winner);
console.log(humanScore);
console.log(computerScore);

const advanceRound = () =>
{
  currentRoundNumber += 1;
}

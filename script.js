// /*Project 'Number Guesser' from codecademy pro after lesson of Variables, 
// conditionals and functions */
// let humanScore = 0;
// let computerScore = 0;
// let currentRoundNumber = 1;

// //Write your code below:

// /* It is a number guessing game. When the game starts, there is a secret number
// chosen from 0 to 9. which is unknown to both players; user and computer. Now, 
// the user will choose a number and computer will choose a number. Whose number 
// will be closest to the secret number, he will be the winner i.e. either the 
// user(playing this game) or computer. */

// //generating secret number randomly
// const generateTarget = () =>
// {
//   return Math.floor(Math.random()*10);
// }

// //declare and define human guess, comp guess and secret number
// let humanGuess = 5;
// console.log(humanGuess);
// let computerGuess = Math.floor(Math.random() * 10);
// console.log(computerGuess);
// let secretNumber = generateTarget();
// console.log(secretNumber);

// //compare guesses function to determine winner
// const compareGuesses = (humanGuess,computerGuess,secretNumber) =>
// {   
//  //checking that who is winner by Math.absolute method 
//   if((Math.abs(humanGuess-secretNumber)) <= (Math.abs(computerGuess-secretNumber)))
//     {
      
//       return true; // User guess is closer to secret number
//     }
//   else 
//     {
//       return false;  //Computer guess is closer to secret number
//     }
  
// }
// console.log(compareGuesses(humanGuess,computerGuess,secretNumber));

// //updating score after determining the winner
// const updateScore = (winner) =>
// {
//   if(compareGuesses)
//     {
//       humanScore++;
//       return 'Your score  is ' +humanScore+ '.';
//     }
//   else
//     {
//       computerScore++;
//       return 'Computer score is ' +computerScore+ '.';
//     }
// }
// console.log(updateScore());
// console.log(humanScore);
// console.log(computerScore)


let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:



  //This function should return a random integer between 0 and 9
function generateTarget() {
  
  return Math.floor(Math.random() * 10);
  
  
} //this is the end of the generateTarget() function

//this function should be able to return the aboslute value between to numbers
function getAbsoluteDistance(number1, number2) {
  
  return (Math.abs(number1 - number2))
  
} //this is the end of the getAbsoluteDistanceFunction


//this function should compare the guesses of the player and computer with the secret number they are competing to guess at. 
function compareGuesses(playerChoice, computerChoice, secretNumber) {
  
  //this should make it so that they should only type a number between 0 and 10
  
  if (playerChoice > 10) {
    return alert('pick a number between 0 and 10 please')
  }
  
  
  
  //these variables are the distance between the secret number and the choice of the computer and player
  
  let playerDistance = getAbsoluteDistance(playerChoice, secretNumber)
  
  let computerDistance = getAbsoluteDistance(computerChoice, secretNumber)
  
  if (playerDistance < computerDistance) {
    
    return true
    
  } else if (playerDistance > computerDistance) {
    
    return false
    
  } else if (playerDistance === computerDistance) {
    
    return true
    
  } // this is the end of the if else statement 
  
  
} //this is the end of the compareGuesses() function



function updateScore(winnerName) {
  
  if (winnerName === 'human') {
    
    humanScore += 1
    
  } else if (winnerName === 'computer') {
    
    computerScore += 1
    
  }
  
} // the is the end of the updateScore() function


function advanceRound() {
  
  currentRoundNumber += 1
  
} // this is the end of the advanceRoundNumber function

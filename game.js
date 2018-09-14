const prompt = require("prompt-async");

const secretNumber = Math.floor(Math.random() * Math.floor(50)) + 1;
let numGuesses = 0;

console.log("Please guess a number between 1 and 50");
async function guessNumber() {
  if (num_guesses >= 5) {
    console.log(`No more guesses! The answer was ${secretNumber}`);
    return;
  }
  prompt.start();

  let { guess } = await prompt.get(["guess"]);

  // console.log(`Your guess was ${guess}`);

  if (guess == secretnumber) {
    console.log("You guessed right! Congratulations!");
    return;
  } else if (guess > secretNumber) {
    console.log("Too high! Try again");
    numGuesses++;
    guessNumber();
  } else {
    console.log("Too low! Try again");
    numGuesses++;
    guessNumber();
  }
}

async function errorHandlingAsync() {
  try {
    await guessNumber();
  } catch (error) {
    console.error("An error occurred: ", error);
  }
}

errorHandlingAsync();

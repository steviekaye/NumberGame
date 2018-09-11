console.log("Please guess a number between 1 and 50");

var secretnumber = Math.floor(Math.random() * Math.floor(50)) + 1;
// console.log(secretnumber);
// var guess1;
var num_guesses = 0;

const prompt = require("prompt-async");

async function example_async() {
  if (num_guesses >= 5) {
    console.log(`No more guesses! The answer was ${secretnumber}`);
    return;
  }
  prompt.start();
  // var guess1;

  // console.log(`Please guess a number`);
  var { guess } = await prompt.get(["guess"]);
  //
  // Log the results.
  // console.log(`Your guess was ${guess}`);
  //

  // var guess1 = guess;
  if (guess == secretnumber) {
    console.log("You guessed right! Congratulations!");
    return;
  } else if (guess > secretnumber) {
    console.log("Too high! Try again");
    num_guesses++;
    example_async();
  } else {
    console.log("Too low! Try again");
    num_guesses++;
    example_async();
  }
}

async function error_handling_async() {
  try {
    await example_async();
  } catch (error) {
    console.error("An error occurred: ", error);
  }
}

error_handling_async();

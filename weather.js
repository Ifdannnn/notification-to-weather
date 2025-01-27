const readline = require("readline"); // import the readline for user input

// the weather conditions
let weather = ["Rain", "Cloudy", "Sunny", "Hot", "Stormy"];

// antar muka user input pada terminal

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "enter your weather condition(Rain, Cloudy, Sunny, Hot, Stormy): ",
  (userInput) => {
    let day;

    switch (userInput) {
      case "Rain":
        day = "hey dont go anywhere, cause rain will come to you";
        break;
      case "Cloudy":
        day = "dont forget to take the umbrella!";
        break;
      case "Sunny":
        day = "hey, you were waited by your friend/gf, have a nice day!";
        break;
      case "Hot":
        day = "the weather can bring you to the HELL";
        break;
      case "Stormy":
        day = "you'll die if you go out";
        break;
      default:
        day = "no notification weather for you";
    }
    console.log(day);

    rl.close();
  }
);

console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

let myNumber = 27

let inputNumber = prompt("Pick a number.");

if (inputNumber < myNumber ) {
  // console.log("too low");
} else if (inputNumber > myNumber) {
  // console.log("too high");
} else {
  // console.log("Congratulations!!!");
}

let birthMonth = window.prompt("What is your birth month?");
 
let birthSeason;

switch (birthMonth.toLowerCase()) {
  case "january":
  case "february":
  case "december":
    birthSeason = "Winter";
    break;
  case "march":
  case "april":
  case "may":
    birthSeason = "Spring";
    break;
  case "june":
  case "july":
  case "august":
    birthSeason = "Summer";
    break;
  case "september":
  case "october":
  case "november":
    birthSeason = "Fall";
    break;
  default:
    console.log("incorrect format. please try again.");
}
console.log("You said: " + birthMonth)
console.log("You were born in the " + birthSeason)


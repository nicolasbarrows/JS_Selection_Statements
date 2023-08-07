console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1

let myNumber = 27;

let inputNumber = prompt("Pick a number.");

if (inputNumber < myNumber) {
  console.log("too low");
} else if (inputNumber > myNumber) {
  console.log("too high");
} else {
  console.log("Congratulations!!!");
}

// Exercise 2

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
console.log("You said: " + birthMonth);
console.log("You were born in the " + birthSeason);

// Exercise 3

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01":
    type = "Tank top";
    break;
  case "02":
    type = "T-Shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type = "Sweatshirt";
    break;
  default:
    type = "Other";
}

switch (colorId) {
  case "BK":
    color = "Black";
    break;
  case "BU":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  default:
    color = "White";
}

switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);

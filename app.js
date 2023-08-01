console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

let myNumber = 27

let inputNumber = prompt("Pick a number.");

if (inputNumber < myNumber ) {
  console.log("too low");
} else if (inputNumber > myNumber) {
  console.log("too high");
} else {
  console.log("Congratulations!!!");
}


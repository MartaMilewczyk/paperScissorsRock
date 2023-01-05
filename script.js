let choices = ["rock", "paper", "scissors"];

let userChoice = prompt("Choose paper, scissors or rock: ");

function compInput(choices){
    return choices[Math.floor(Math.random()*choices.length)];
}
console.log(compInput(choices));


let wins = 0;
let loses = 0;
let ties = 0;


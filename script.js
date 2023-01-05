let choices = ["rock", "paper", "scissors"];

let userChoice = prompt("Choose paper, scissors or rock: ");

function compInput(choices){
    return choices[Math.floor(Math.random()*choices.length)];
}
console.log(compInput(choices));




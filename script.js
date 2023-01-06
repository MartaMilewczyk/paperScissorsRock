// array storing game choices - rock, paper, scissors
let choices = ["rock", "paper", "scissors"];

// variables for counting scores
let wins = 0;
let loses = 0;
let ties = 0;

// user choice
let userChoice = prompt("Choose paper, scissors or rock: ");

// computer choice - implemented randomness
let computerChoice = choices[Math.floor(Math.random() * choices.length)];

// game logic
if (userChoice === "rock" ||
    userChoice === "paper" ||
    userChoice === "scissors") {
    
// info about picked choices
    alert(`Player has chosen ${userChoice}`);
    alert(`Computer has chosen ${computerChoice}`);
    

// game logic - draw
    if (userChoice === computerChoice) {
        ties++;
        alert(`It is  a draw`)
// game logic - user wins
    } else if ( userChoice === "rock" && computerChoice === "scissors" ||
                userChoice === "paper" && computerChoice === "rocks"   ||
                userChoice === "scissors" && computerChoice === "paper") {
                    wins++;
                    alert(`Player wins!`)
// game logic - computer wins
    } else {
                    loses++;
                    alert(`Player losts!`)
    }

// info about wrong choice
} else {
    alert(`Wrong choice! Choose again`)
}



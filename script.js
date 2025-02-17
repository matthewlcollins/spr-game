// Computer choice logic
// random number 1-3
// assign rock paper scissors a number
// output to be rock paper or scissors

function compChoice() {
    let num = Math.floor(Math.random()* 3); //output 0 - 2
    if (num == 0) {
        return 'rock'
    } else if (num == 1) {
        return 'paper'
    } else  {
        return 'scissors'
    }
}

function myChoice() {
    let choice = prompt('Rock, paper or scissors?');
    return choice.toLowerCase()
}



let humanScore = 0;
let compScore = 0;
let result = '';

function playRound(myChoice, compChoice) {
    if (myChoice == compChoice) {
        return 'This round is a draw'
    } else if (myChoice == 'rock' && compChoice == 'scissors') {
        humanScore++
        return 'Player wins!'
    } else if (myChoice == 'scissors' && compChoice == 'paper') {
        humanScore++
        return 'Player wins!'
    }  else if (myChoice == 'paper' && compChoice == 'rock') {
        humanScore++
        return 'Player wins!'
    } else {
        compScore++
        return 'Computer wins'
    }
};

function playGame() {
    do {
        const humanSelection = myChoice();
        const compSelection = compChoice();
        result = playRound(humanSelection, compSelection);
        console.log(humanSelection)
        console.log(compSelection)
        console.log(result)
        console.log('human score is ' + humanScore, 'comp score is ' + compScore)
    } while (compScore < 5 && humanScore < 5)
};

playGame();
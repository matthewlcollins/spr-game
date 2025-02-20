let humanScore = 0;
let compScore = 0;
let result = '';
let choice = ""


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
    document.getElementById("rock").onclick = () => {
       choice = "rock"
       playOneRound();
    }
    document.getElementById("paper").onclick = () => {
       choice = "paper"
       playOneRound();
    }
    document.getElementById("scissors").onclick = () => {
       choice = "scissors"
       playOneRound();
    }
    return choice
}

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

function playOneRound() {
    const compSelection = compChoice();
    const result = playRound(choice, compSelection);
    
    document.getElementById("result").textContent = result
    document.getElementById("human").textContent = "Your Score = " + humanScore
    document.getElementById("comp").textContent = "Comp Score = " + compScore
    document.getElementById("hchoice").textContent = choice
    document.getElementById("cchoice").textContent = compSelection

    if (compScore >= 5 || humanScore >= 5) {
        const body = document.querySelector("body")
        const gameOver = document.createElement("span")
        gameOver.classList.add("gameover")
        gameOver.textContent = "Game over! " + result
        body.appendChild(gameOver)
        
        // Disable buttons
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
    }
}

function resetGame() {
    // Reset scores
    humanScore = 0;
    compScore = 0;
    choice = "";
    
    // Reset display
    document.getElementById("human").textContent = "Your Score = 0";
    document.getElementById("comp").textContent = "Comp Score = 0";
    document.getElementById("hchoice").textContent = "";
    document.getElementById("cchoice").textContent = "";
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
    document.querySelector(".gameover").remove()
}

document.querySelector(".playbutton").onclick = resetGame;
myChoice();


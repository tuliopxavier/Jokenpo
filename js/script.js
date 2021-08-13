// show and close about modal

let aboutModal = document.querySelector("#about-modal");

document.querySelector("#about").addEventListener("click", function(){
    aboutModal.showModal();
});
document.querySelector("#back-from-about").addEventListener("click", function(){
    aboutModal.close();
});


// show and close rules modal

let rulesModal = document.querySelector("#rules-modal");

document.querySelector("#rules").addEventListener("click", function(){
    rulesModal.showModal();
});
document.querySelector("#back-from-rules").addEventListener("click", function(){
    rulesModal.close();
});


// query elements and variables

let userRock = document.querySelector("#user-rock");
let userPaper = document.querySelector("#user-paper");
let userScissors = document.querySelector("#user-scissors");
let computerRock = document.querySelector("#computer-rock");
let computerPaper = document.querySelector("#computer-paper");
let computerScissors = document.querySelector("#computer-scissors");

let playerScore = document.querySelector("#player-score");
let computerScore = document.querySelector("#computer-score");

let result = document.querySelector("#result");

let playerChoice = 0;
let computerChoice = 0;
let playerCounter = 0;
let computerCounter = 0;


// computer random choice

function computerRandomChoice(){
    computerChoice = Math.floor((Math.random() * 3) + 1);

    if (computerChoice == 1) {
        computerRock.setAttribute("style", "opacity: 1; transform: scale(1.3);");
    }
    else if (computerChoice == 2) {
        computerPaper.setAttribute("style", "opacity: 1; transform: scale(1.3);");
    }
    else {
        computerScissors.setAttribute("style", "opacity: 1; transform: scale(1.3);");
    }
};

function cleanComputerChoice (){
    computerChoice = 0;
    computerRock.setAttribute("style", "opacity: .75; transform: scale(1);");
    computerPaper.setAttribute("style", "opacity: .75; transform: scale(1);");
    computerScissors.setAttribute("style", "opacity: .75; transform: scale(1);");
};

function cleanScore () {
    playerCounter = 0;
        playerScore.innerHTML = `${playerCounter}/3`;
        computerCounter = 0;
        computerScore.innerHTML = `${computerCounter}/3`;
        result.innerHTML = 'Good Luck this time!'
}

function endGame() {
    if (playerCounter == 3){
        playerScore.setAttribute("style", "animation: blink 1.5s linear;");
        setTimeout(function (){
            document.querySelector("#victory-modal").showModal();
            document.querySelector("#victory-message").innerHTML = "Congratulations, you wins!";
            cleanScore()},1500);
    } else if(computerCounter == 3){
        computerScore.setAttribute("style", "animation: blink 1.5s linear;");
        setTimeout(function (){
            document.querySelector("#victory-modal").showModal();
            document.querySelector("#victory-message").innerHTML = "It wasn't this time, try again?";
            cleanScore()},1500);
    }

    document.querySelector("#play-again").addEventListener("click", function(){
        document.querySelector("#victory-modal").close();
        cleanScore();
    });
};

// user choice

userRock.addEventListener("click", function() {
    playerChoice = 1; //rock
    computerRandomChoice();

    if (computerChoice == playerChoice){
        result.innerHTML = '>>> DRAW <<<';

    } else if (computerChoice == 2){
        computerCounter++;
        computerScore.innerHTML = `${computerCounter}/3`;
        result.innerHTML = 'Computer wins >>>';
    } else {
        playerCounter++;
        playerScore.innerHTML = `${playerCounter}/3`;
        result.innerHTML = '<<< Player wins!'
    };

    playerScore.setAttribute("style", "animation: none;");
    computerScore.setAttribute("style", "animation: none;");
    setTimeout(cleanComputerChoice, 3000);
    endGame();
});

userPaper.addEventListener("click", function() {
    playerChoice = 2; // paper
    computerRandomChoice();

    if (computerChoice == playerChoice){
        result.innerHTML = '>>> DRAW <<<';

    } else if (computerChoice == 1){
        playerCounter++;
        playerScore.innerHTML = `${playerCounter}/3`;
        result.innerHTML = '<<< Player wins!';
    } else {
        computerCounter++;
        computerScore.innerHTML = `${computerCounter}/3`;
        result.innerHTML = 'Computer wins! >>>'
    };
    
    playerScore.setAttribute("style", "animation: none;");
    computerScore.setAttribute("style", "animation: none;");
    setTimeout(cleanComputerChoice, 3000);
    endGame();
});

userScissors.addEventListener("click", function() {
    playerChoice = 3; // scissors
    computerRandomChoice();

    if (computerChoice == playerChoice){
        result.innerHTML = '>>> DRAW <<<';

    } else if (computerChoice == 1){
        computerCounter++;
        computerScore.innerHTML = `${computerCounter}/3`;
        result.innerHTML = 'Computer wins! >>>';
    } else {
        playerCounter++;
        playerScore.innerHTML = `${playerCounter}/3`;
        result.innerHTML = '<<< Player wins!';
    };

    playerScore.setAttribute("style", "animation: none;");
    computerScore.setAttribute("style", "animation: none;");
    setTimeout(cleanComputerChoice, 3000);
    endGame();
});

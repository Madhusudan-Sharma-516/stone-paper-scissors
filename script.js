const stoneBtn = document.querySelector("#stone-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const resetBtn = document.querySelector("#resetBtn");
const playerChoice = document.querySelector("#player-img");
const botChoice = document.querySelector("#bot-img");
const result = document.querySelector("#result");
const playerScore = document.querySelector("#player-score");
const botScore = document.querySelector("#bot-score");

let playerSc = 0;
let botSc = 0;

function getRandomNumber() {
    return Math.floor(Math.random() * 3) + 1;
}

function updateScore() {
    playerScore.innerText = `Player Score: ${playerSc}`;
    botScore.innerText = `Bot Score: ${botSc}`;
}

function setChoiceImages(playerImg, botImg) {
    playerChoice.src = `./resource/${playerImg}.png`;
    botChoice.src = `./resource/${botImg}.png`;
}

function setResultText(text) {
    result.innerText = text;
}

function playRound(playerSelection) {
    const botSelection = getRandomNumber();
    const choices = ["stone", "paper", "scissors"];
    const playerImg = choices[playerSelection - 1];
    const botImg = choices[botSelection - 1];

    setChoiceImages(playerImg, botImg);

    if (playerSelection === botSelection) {
        setResultText("Game Tie!");
    } else if (
        (playerSelection === 1 && botSelection === 3) ||
        (playerSelection === 2 && botSelection === 1) ||
        (playerSelection === 3 && botSelection === 2)
    ) {
        setResultText("You Won!");
        playerSc++;
    } else {
        setResultText("You Lose!");
        botSc++;
    }
    updateScore();
}

stoneBtn.addEventListener("click", function () {
    playRound(1);
});

paperBtn.addEventListener("click", function () {
    playRound(2);
});

scissorsBtn.addEventListener("click", function () {
    playRound(3);
});

resetBtn.addEventListener("click", function () {
    playerSc = 0;
    botSc = 0;
    updateScore();
    setResultText("");
    playerChoice.src = "";
    botChoice.src = "";
});

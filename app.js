let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscoreshow = document.querySelector("#user-score");
const compscoreshow = document.querySelector("#comp-score");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const reset = () => {
    choices.forEach(choice => choice.removeEventListener("click", () => {}));
    const newMatch = document.querySelector("#new");
    newMatch.addEventListener("click", () => {
    msg.innerText = "Play your move";
    userScore = 0;
    compScore = 0;
    userscoreshow.textContent = userScore;
    compscoreshow.textContent = compScore;
    msg.style.backgroundColor = "#001A23";
  });
};

const newMatch = document.querySelector("#new");
newMatch.addEventListener("click", reset);

const drawGame = () => {
    msg.innerText = "GAME WAS A DRAW!!";
    msg.style.backgroundColor = "#001A23";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userscoreshow.innerText = userScore;
        msg.innerText = `YOU WIN!! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compscoreshow.innerText = compScore;
        msg.innerText = `YOU LOOSE!! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("choice was clicked", userChoice);
    const compChoice = computerChoice();
    if (userChoice == compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    } 
};

const computerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * 3);
    return options[index];
};
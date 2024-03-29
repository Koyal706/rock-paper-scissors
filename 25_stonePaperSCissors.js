let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");



const gencomChoice = () => {
    // rock paper choice
    const options = ["rock", "paper", "scissors"];
    let rand = Math.floor(Math.random() * 3);
    return options[rand];
}


const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userScorepara.innerHTML = userScore;
        msg.innerText = "you win";
        msg.style.backgroundColor = "green"
    }
    else {
        compScore++;
        console.log("you loose");
        compScorepara.innerHTML = compScore;
        msg.innerText = "you loose !";
        msg.style.backgroundColor = "red"

    }
}

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = ("game was draw");
    msg.style.backgroundColor = 'blue'
}

const playgame = (userChoice) => {
    //generate computer choice----------
    console.log("user choice", userChoice)
    let comChoice = gencomChoice();
    console.log(comChoice);
    if (userChoice === comChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            comChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            comChoice === "scissors" ? false : true;
        }
        else {
            comChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}




choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        console.log("choice was clicked", userChoice);
        playgame(userChoice)
    });
});
let userScore = 0;
let cpuScore = 0;
let userScorecontainer = document.getElementById("user-score");
let cpuScorecontainer = document.getElementById("cpu-score");
let choices = document.querySelectorAll(".gBs");
let msg = document.getElementById("msg");
function genCpuChoise() {
  let choices = ["rock", "paper", "scissor"];
  let randIndex = Math.floor(Math.random() * 2.5);
  var cpuChoice = choices[randIndex];
  return cpuChoice;
}
function playGame(userChoice) {
  let cpuChoice = genCpuChoise();
  if (userChoice === cpuChoice) {
    return "draw";
  } else if (userChoice === "rock" && cpuChoice === "paper") {
    return "loss";
  } else if (userChoice === "rock" && cpuChoice === "scissor") {
    return "won";
  } else if (userChoice === "paper" && cpuChoice === "rock") {
    return "won";
  } else if (userChoice === "paper" && cpuChoice === "scissor") {
    return "loss";
  } else if (userChoice === "scissor" && cpuChoice === "rock") {
    return "loss";
  } else if (userChoice == "scissor" && cpuChoice === "paper") {
    return "won";
  }
}
function updateScore() {
  userScorecontainer.innerText = userScore;
  cpuScorecontainer.innerText = cpuScore;
}
function genScore(result) {
  if (result === "won") {
    userScore++;
    msg.style.backgroundColor = "green";
    msg.innerText = "You Win!";
  } else if (result === "loss") {
    cpuScore++;
    msg.style.backgroundColor = "red";
    msg.innerText = "You Lost!";
  } else {
    msg.style.backgroundColor = "gray";
    msg.innerText = "Game Drawed!";
  }
  updateScore();
}
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    var userChoice = choice.getAttribute("id");
    let result = playGame(userChoice);
    genScore(result);
  });
});

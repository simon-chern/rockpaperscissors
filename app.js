// const rock = document.getElementById("r");
// const paper = document.getElementById("p");
// const scissors = document.getElementById("s");
const computer_badge = document.getElementById("computer-score");
const human_badge = document.getElementById("user-score");
const score_board = document.querySelector(".score-board");
const message = document.querySelector(".result")
const reset = document.querySelector(".reset")
let computer_score = 0
let human_score = 0

const choices = document.querySelectorAll(".choice")
const sign = ["r", "p", "s"];
choices.forEach( choice => {
  choice.addEventListener("click", e => {
    const iconClicked = e.target.classList.contains("fa-regular")
    const human_choice = iconClicked ? e.target.parentElement.id : e.target.id;
    console.log(human_choice)
    const random = Math.floor(Math.random()*3);
    const comp_choice = sign[random];
    console.log(comp_choice)
    if  ( 
    (human_choice === "r" && comp_choice === "s") ||
    (human_choice === "p" && comp_choice === "r") ||
    (human_choice === "s" && comp_choice === "p") )
    {
      human_score++
      human_badge.innerHTML = human_score;
      setColor("green")
      console.log("win")
      text("Player", "computer")
    }
    else if (
    (human_choice === "r" && comp_choice === "p") || 
    (human_choice === "p" && comp_choice === "s") || 
    (human_choice === "s" && comp_choice === "r") )
    {
      computer_score++
      computer_badge.innerHTML = computer_score;
      setColor("red")
      text("Computer", "player")
      console.log("defeat")
    }
    else {
      setColor("grey")
      console.log("tie")
      message.innerHTML = "It's a tie"
    }
    });
  })

function setColor(color) {
  score_board.style.backgroundColor = color;
}
function text(winner, loser){
  message.innerHTML = `${winner} wins ${loser}`
}

reset.addEventListener("click", btn => {
  message.innerHTML = "Reset has been done."
  computer_score = "0";
  human_score = "0";
  computer_badge.innerHTML = "0";
  human_badge.innerHTML = "0";
  setColor("black")
})
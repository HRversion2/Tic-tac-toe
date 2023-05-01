//Homework: Why does it switch X to O when clicking a box twice? Then fix it.

const rand = Math.floor(Math.random() * 2);
const poss = ["X", "O"];

let targetPlayer = poss[rand];

document.querySelector("#gameboard").addEventListener("click", function (e) {
  const targetBox = e.target;

  if (targetBox.textContent === "X" || targetBox.textContent === "O") {
    return;
  }

  targetBox.textContent = targetPlayer;

  const box0 = document.querySelector("#box-0").textContent;
  const box1 = document.querySelector("#box-1").textContent;
  const box2 = document.querySelector("#box-2").textContent;
  const box3 = document.querySelector("#box-3").textContent;
  const box4 = document.querySelector("#box-4").textContent;
  const box5 = document.querySelector("#box-5").textContent;
  const box6 = document.querySelector("#box-6").textContent;
  const box7 = document.querySelector("#box-7").textContent;
  const box8 = document.querySelector("#box-8").textContent;

  console.log("box0", box0);
  console.log("box1", box1);
  console.log("box2", box2);
  console.log("box3", box3);
  console.log("box4", box4);
  console.log("box5", box5);
  console.log("box6", box6);
  console.log("box7", box7);
  console.log("box8", box8);

  if (box0 === box1 && box0 === box2 && box0 !== "") {
    console.log("winner is ", targetPlayer);
    document.querySelector("#message").textContent =
      "winner is " + targetPlayer;
  }
  if (box3 === box4 && box3 === box5 && box3 !== "") {
    console.log("winner is ", targetPlayer);
    console.log("winner is ", targetPlayer);
    document.querySelector("#message").textContent =
      "winner is " + targetPlayer;
  }
  if (box6 === box7 && box6 === box8 && box6 !== "") {
    console.log("winner is ", targetPlayer);
    console.log("winner is ", targetPlayer);
    document.querySelector("#message").textContent =
      "winner is " + targetPlayer;
  }

  if (box0 === box3 && box0 === box6 && box0 !== "") {
    console.log("winner is ", targetPlayer);
    console.log("winner is ", targetPlayer);
    document.querySelector("#message").textContent =
      "winner is " + targetPlayer;
  }

  if (box1 === box4 && box1 === box7 && box0 !== "") {
    console.log("winner is ", targetPlayer);
    console.log("winner is ", targetPlayer);
    document.querySelector("#message").textContent =
      "winner is " + targetPlayer;
  }

  if (box2 === box5 && box2 === box8 && box2 !== "") {
    console.log("winner is ", targetPlayer);
    console.log("winner is ", targetPlayer);
    document.querySelector("#message").textContent =
      "winner is " + targetPlayer;
  }

  if (box0 === box4 && box0 === box8 && box0 !== "") {
    console.log("winner is ", targetPlayer);
    console.log("winner is ", targetPlayer);
    document.querySelector("#message").textContent =
      "winner is " + targetPlayer;
  }
  if (box2 === box4 && box2 === box6 && box2 !== "") {
    console.log("winner is ", targetPlayer);
    console.log("winner is ", targetPlayer);
    document.querySelector("#message").textContent =
      "winner is " + targetPlayer;
  }

  if (targetPlayer === "X") {
    targetPlayer = "O";
  } else {
    targetPlayer = "X";
  }
});

// finish the Tic-tac-toe by making the restart button and saying that 'you have won' when the game is over, or 'There is a tie'
// when both players have a tie. If possible, turn it in.

function restart() {
  document.querySelector("#box-0").textContent = "";
  document.querySelector("#box-1").textContent = "";
  document.querySelector("#box-2").textContent = "";
  document.querySelector("#box-3").textContent = "";
  document.querySelector("#box-4").textContent = "";
  document.querySelector("#box-5").textContent = "";
  document.querySelector("#box-6").textContent = "";
  document.querySelector("#box-7").textContent = "";
  document.querySelector("#box-8").textContent = "";
}
document.querySelector("#restartBtn").addEventListener("click", () => {
  restart();
});

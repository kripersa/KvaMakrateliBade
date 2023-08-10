let section = document.querySelector("section");
let playngboard = document.querySelector(".playngboard");
let title = document.querySelector(".title");
let scoreBoard = document.querySelector(".scoreboard");
let board = document.querySelector(".board");
let playerImageArray = [];
let footer = document.querySelector(".footer");
let clicked = false;
let playerChoise = [];
let playerScore = 0;
let cpuScore = 0;
let playerSpan = document.querySelector(".playerSpan");
let CpuSpan = document.querySelector(".cpuSpan");
let cpuImageSrcArray = [
  "/images/cpuimages/paper.svg",
  "/images/cpuimages/rock.svg",
  "/images/cpuimages/scissors.svg",
];
playerSpan.innerHTML = playerScore;
CpuSpan.innerHTML = cpuScore;
function createplayerimagearray() {
  let playerImageRock = document.createElement("img");
  playerImageRock.classList.add("rock");
  playerImageRock.src = "/images/playerimages/hand-back-fist-regular.svg";
  let playerImagePaper = document.createElement("img");
  playerImagePaper.src = "/images/playerimages/hand-regular.svg";
  playerImagePaper.classList.add("paper");
  let playerImageSciossos = document.createElement("img");
  playerImageSciossos.src = "/images/playerimages/scissors.png";
  playerImageSciossos.classList.add("scissors");
  playerImageArray.push(playerImageRock, playerImagePaper, playerImageSciossos);
}
function crateBoard() {
  for (let i = 0; i < 3; i++) {
    let button = document.createElement("button");
    button.classList.add("button");
    button.appendChild(playerImageArray[i]);
    playngboard.appendChild(button);
  }
}
function crateStartButton() {
  let buttons = Array.from(document.querySelectorAll(".button"));
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.addEventListener("click", () => {
      console.log(clicked);
      console.log(button);
      button.classList.add("buttonclicked");
      if (clicked == false) {
        let startingButton = document.createElement("button");
        startingButton.classList.add("startingButton");
        startingButton.innerText = "Start";
        board.appendChild(startingButton);
        footer.appendChild(startingButton);
        clicked = true;
        StartChoosingAnimation();

        function StartChoosingAnimation() {
          startingButton.addEventListener("click", () => {
            playngboard.style.display = "none";
            let rigthChooiseBox = document.createElement("div");
            rigthChooiseBox.classList.add("rigthChooiseBox");
            let rightChooiseBoxImage = document.createElement("img");
            rightChooiseBoxImage.src = "images/chosing/right.png";
            rightChooiseBoxImage.classList.add("rigthChooiseBoxImage");
            rigthChooiseBox.appendChild(rightChooiseBoxImage);
            let leftChooiseBox = document.createElement("div");
            leftChooiseBox.classList.add("leftChooiseBox");
            let leftChooiseBoxImage = document.createElement("img");
            leftChooiseBoxImage.src = "images/chosing/left.png";
            leftChooiseBoxImage.classList.add("leftChooiseBoxImage");
            leftChooiseBox.appendChild(leftChooiseBoxImage);
            board.appendChild(leftChooiseBox);
            board.appendChild(rigthChooiseBox);
            footer.innerHTML = "";
            setTimeout(function () {
              showBothChooses();
            }, 7000);
          });
        }
      }
      playerChoise = [];
      playerChoise.push(button.innerHTML);
    });
  }
}

function showBothChooses() {
  board.innerHTML = "";
  let playerChooseBox = document.createElement("div");
  playerChooseBox.classList.add("playerChooseBox");
  playerChooseBox.innerHTML = playerChoise[0];
  board.appendChild(playerChooseBox);
  console.log(playerChoise);
  let cpuImageBox = document.createElement("div");
  cpuImageBox.classList.add("cpuImageBox");
  let cpuImage = document.createElement("img");
  cpuImage.src = cpuImageSrcArray[Math.floor(Math.random() * 3)];
  cpuImage.classList.add(cpuImage.src);

  cpuImageBox.appendChild(cpuImage);
  board.appendChild(cpuImageBox);
  let resetButton = document.createElement("button");
  resetButton.classList.add("resetButton");
  resetButton.innerText = "Reset";
  footer.appendChild(resetButton);
  score();
  resetGame();
  function resetGame() {
    resetButton.addEventListener("click", () => {
      board.innerHTML = "";
      playngboard.style.display = "flex";
      board.appendChild(playngboard);
      for (let i = 0; i < 3; i++) {
        playngboard.children[i].classList.remove("buttonclicked");
      }
      footer.innerHTML = "";
      clicked = false;
    });
  }
  function score() {
    for (let i = 0; i < 1; i++) {
      let player = playerChooseBox.children[i].classList[i];
      let cpu = cpuImageBox.children[i].classList[i];
      if (player.includes("paper") && cpu.includes("rock")) {
        console.log("gvegirsa");
        playerScore += 1;
        playerSpan.innerHTML = playerScore;
        CpuSpan.innerHTML = cpuScore;
      } else if (player.includes("paper") && cpu.includes("scissors")) {
        cpuScore += 1;
        playerSpan.innerHTML = playerScore;
        CpuSpan.innerHTML = cpuScore;
      } else if (player.includes("rock") && cpu.includes("paper")) {
        cpuScore += 1;
        playerSpan.innerHTML = playerScore;
        CpuSpan.innerHTML = cpuScore;
      } else if (player.includes("rock") && cpu.includes("scissors")) {
        playerScore += 1;
        playerSpan.innerHTML = playerScore;
        CpuSpan.innerHTML = cpuScore;
      } else if (player.includes("scissors") && cpu.includes("paper")) {
        playerScore += 1;
        playerSpan.innerHTML = playerScore;
        CpuSpan.innerHTML = cpuScore;
      } else if (player.includes("scissors") && cpu.includes("rock")) {
        cpuScore += 1;
        playerSpan.innerHTML = playerScore;
        CpuSpan.innerHTML = cpuScore;
      }
    }
  }
}

createplayerimagearray();
crateBoard();
crateStartButton();

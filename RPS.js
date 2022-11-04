document.getElementById("rule3").addEventListener("click", () => {
  document.getElementById("rule-card").style.display = "block";
  document.querySelector(".img-rule3").style.display = "block";
  document.querySelector(".img-rule5").style.display = "none";
});

document.getElementById("rule5").addEventListener("click", () => {
  document.getElementById("rule-card").style.display = "block";
  document.querySelector(".img-rule5").style.display = "block";
  document.querySelector(".img-rule3").style.display = "none";
});

document.getElementById("close").addEventListener("click", () => {
  document.getElementById("rule-card").style.display = "none";
});

const computer = ["Rock", "Paper", "Scissor", "Spock", "Lizard"];
const score = document.getElementById("score");

function random() {
  let arraylength;
  if (score.textContent >= 3) {
    arraylength = 5;
  } else if (score.textContent < 3) {
    arraylength = 3;
  }
  let index = Math.floor(Math.random() * arraylength);
  let computerchoose = computer[index];
  let idcomputer = "comChoose" + computerchoose;
  return idcomputer;
}

function comchoose(n) {
  let idcom = random();
  setTimeout(() => {
    document.getElementById(idcom).style.display = "block";
  }, 1000);
  setTimeout(() => {
    gameresult(n, idcom);
  }, 2000);
}

/********************************************************* */
document.getElementById("paper").addEventListener("click", () => {
  document.getElementById("triangle").style.display = "none";
  document.getElementById("pentagon").style.display = "none";
  document.getElementById("rock").style.display = "none";
  document.getElementById("scissor").style.display = "none";
  document.getElementById("spock").style.display = "none";
  document.getElementById("lizard").style.display = "none";
  document.getElementById("paper").style.animationPlayState = "running";
  document.querySelector(".circleA").style.animationPlayState = "running";
  document.querySelector(".imgA").style.animationPlayState = "running";
  document.getElementById("paper").style.animationName = "mymove";
  document.querySelector(".circleA").style.animationName = "circlemove";
  document.querySelector(".imgA").style.animationName = "imgmove";
  setTimeout(() => {
    document.getElementById("paper").style.display = "none";
  }, 2990);
  setTimeout(() => {
    document.getElementById("in-game").style.display = "flex";
    document.getElementById("youChoosePaper").style.display = "block";
    document.querySelector(".circleempty").style.backgroundColor =
      " hsl(237, 49%, 15%)";
  }, 3000);
  setTimeout(() => {
    comchoose("paper");
  }, 4000);
});

document.getElementById("scissor").addEventListener("click", () => {
  document.getElementById("triangle").style.display = "none";
  document.getElementById("pentagon").style.display = "none";
  document.getElementById("rock").style.display = "none";
  document.getElementById("paper").style.display = "none";
  document.getElementById("spock").style.display = "none";
  document.getElementById("lizard").style.display = "none";
  document.getElementById("scissor").style.animationPlayState = "running";
  document.querySelector(".circleB").style.animationPlayState = "running";
  document.querySelector(".imgB").style.animationPlayState = "running";
  document.getElementById("scissor").style.animationName = "mymove";
  document.querySelector(".circleB").style.animationName = "circlemove";
  document.querySelector(".imgB").style.animationName = "imgmove";
  setTimeout(() => {
    document.getElementById("scissor").style.display = "none";
  }, 2990);
  setTimeout(() => {
    document.getElementById("in-game").style.display = "flex";
    document.getElementById("youChooseScissor").style.display = "block";
    document.querySelector(".circleempty").style.backgroundColor =
      " hsl(237, 49%, 15%)";
  }, 3000);
  setTimeout(() => {
    comchoose("scissor");
  }, 4000);
});

document.getElementById("rock").addEventListener("click", () => {
  document.getElementById("triangle").style.display = "none";
  document.getElementById("pentagon").style.display = "none";
  document.getElementById("scissor").style.display = "none";
  document.getElementById("paper").style.display = "none";
  document.getElementById("spock").style.display = "none";
  document.getElementById("lizard").style.display = "none";
  document.getElementById("rock").style.animationPlayState = "running";
  document.querySelector(".circleC").style.animationPlayState = "running";
  document.querySelector(".imgC").style.animationPlayState = "running";
  document.getElementById("rock").style.animationName = "mymove";
  document.querySelector(".circleC").style.animationName = "circlemove";
  document.querySelector(".imgC").style.animationName = "imgmove";
  setTimeout(() => {
    document.getElementById("rock").style.display = "none";
  }, 2990);
  setTimeout(() => {
    document.getElementById("in-game").style.display = "flex";
    document.getElementById("youChooseRock").style.display = "block";
    document.querySelector(".circleempty").style.backgroundColor =
      " hsl(237, 49%, 15%)";
  }, 3000);
  setTimeout(() => {
    comchoose("rock");
  }, 4000);
});

document.getElementById("spock").addEventListener("click", () => {
  document.getElementById("pentagon").style.display = "none";
  document.getElementById("scissor").style.display = "none";
  document.getElementById("paper").style.display = "none";
  document.getElementById("rock").style.display = "none";
  document.getElementById("lizard").style.display = "none";
  document.getElementById("spock").style.animationPlayState = "running";
  document.querySelector(".circleD").style.animationPlayState = "running";
  document.querySelector(".imgD").style.animationPlayState = "running";
  document.getElementById("spock").style.animationName = "mymove";
  document.querySelector(".circleD").style.animationName = "circlemove";
  document.querySelector(".imgD").style.animationName = "imgmove";
  setTimeout(() => {
    document.getElementById("spock").style.display = "none";
  }, 2990);
  setTimeout(() => {
    document.getElementById("in-game").style.display = "flex";
    document.getElementById("youChooseSpock").style.display = "block";
    document.querySelector(".circleempty").style.backgroundColor =
      " hsl(237, 49%, 15%)";
  }, 3000);
  setTimeout(() => {
    comchoose("spock");
  }, 4000);
});

document.getElementById("lizard").addEventListener("click", () => {
  document.getElementById("pentagon").style.display = "none";
  document.getElementById("scissor").style.display = "none";
  document.getElementById("paper").style.display = "none";
  document.getElementById("rock").style.display = "none";
  document.getElementById("spock").style.display = "none";
  document.getElementById("lizard").style.animationPlayState = "running";
  document.querySelector(".circleE").style.animationPlayState = "running";
  document.querySelector(".imgE").style.animationPlayState = "running";
  document.getElementById("lizard").style.animationName = "mymove";
  document.querySelector(".circleE").style.animationName = "circlemove";
  document.querySelector(".imgE").style.animationName = "imgmove";
  setTimeout(() => {
    document.getElementById("lizard").style.display = "none";
  }, 2990);
  setTimeout(() => {
    document.getElementById("in-game").style.display = "flex";
    document.getElementById("youChooseLizard").style.display = "block";
    document.querySelector(".circleempty").style.backgroundColor =
      " hsl(237, 49%, 15%)";
  }, 3000);
  setTimeout(() => {
    comchoose("lizard");
  }, 4000);
});

/*********************************************************** */
function gameresult(you, com) {
  let word;
  let Com = com.slice(9);
  switch (you) {
    case "paper":
      if (Com === "Paper") {
        word = "YOU DRAW";
      } else if (Com === "Rock" || Com === "Spock") {
        word = "YOU WIN";
      } else if (Com === "Scissor" || Com === "Lizard") {
        word = "YOU LOSE";
      }
      break;
    case "rock":
      if (Com === "Paper" || Com === "Spock") {
        word = "YOU LOSE";
      } else if (Com === "Rock") {
        word = "YOU DRAW";
      } else if (Com === "Scissor" || Com === "Lizard") {
        word = "YOU WIN";
      }
      break;
    case "scissor":
      if (Com === "Paper" || Com === "Lizard") {
        word = "YOU WIN";
      } else if (Com === "Rock" || Com === "Spock") {
        word = "YOU LOSE";
      } else if (Com === "Scissor") {
        word = "YOU DRAW";
      }
      break;
    case "spock":
      if (Com === "Scissor" || Com === "Rock") {
        word = "YOU WIN";
      } else if (Com === "Paper" || Com === "Lizard") {
        word = "YOU LOSE";
      } else if (Com === "Spock") {
        word = "YOU DRAW";
      }
      break;
    case "lizard":
      if (Com === "Spock" || Com === "Paper") {
        word = "YOU WIN";
      } else if (Com === "Rock" || Com === "Scissor") {
        word = "YOU LOSE";
      } else if (Com === "Lizard") {
        word = "YOU DRAW";
      }
      break;
  }
  document.getElementById("result").innerHTML = word;
  setTimeout(() => {
    document.getElementById("in-game").style.animationPlayState = "running";
    document.getElementById("in-game").style.animationName = "moveresult";
    document.querySelector(".circleempty").style.backgroundColor =
      "transparent";
    document.getElementById(com).style.display = "block";
  }, 500);
  setTimeout(() => {
    document.getElementById("vs").style.display = "block";
    let i = parseInt(score.textContent);
    console.log(i);
    if (word === "YOU WIN") {
      i++;
      score.innerHTML = i;
      if (score.textContent >= 3) {
        document.getElementById("again").style.display = "none";
        document.getElementById("playbonus").style.display = "block";
      }
    } else if (word === "YOU DRAW") {
      if (score.textContent >= 3) {
        document.getElementById("again").style.display = "none";
        document.getElementById("playbonus").style.display = "block";
      }
    } else if (word === "YOU LOSE") {
      i--;
      score.innerHTML = i;
      if (score.textContent < 3) {
        document.getElementById("again").style.display = "block";
        document.getElementById("playbonus").style.display = "none";
      }
    }
  }, 3000);
  setTimeout(() => {
    if (word === "YOU WIN") {
      document.getElementById("anime").classList.add("animationyouwin");
    } else if (word === "YOU LOSE") {
      document.getElementById("anime").classList.add("animationyoulose");
    }
  }, 3100);
}

/**************************************************************** */
document.getElementById("again").addEventListener("click", () => {
  document.getElementById("in-game").style.display = "none";
  document.getElementById("alert").style.display = "block";
  document.getElementById("rule3").style.display = "block";
  document.getElementById("rule5").style.display = "none";
  document.querySelector(".img3").style.display = "block";
  document.querySelector(".img5").style.display = "none";
  document.getElementById("triangle").style.display = "block";

  document.getElementById("rock").style.display = "block";
  document.getElementById("scissor").style.display = "block";
  document.getElementById("paper").style.display = "block";

  

  document.getElementById("rock").style.animationPlayState = "paused";
  document.getElementById("scissor").style.animationPlayState = "paused";
  document.getElementById("paper").style.animationPlayState = "paused";
  document.getElementById("spock").style.animationPlayState = "paused";
  document.getElementById("lizard").style.animationPlayState = "paused";

  document.querySelector(".circleA").style.animationPlayState = "paused";
  document.querySelector(".imgA").style.animationPlayState = "paused";
  document.querySelector(".circleB").style.animationPlayState = "paused";
  document.querySelector(".imgB").style.animationPlayState = "paused";
  document.querySelector(".circleC").style.animationPlayState = "paused";
  document.querySelector(".imgC").style.animationPlayState = "paused";
  document.querySelector(".circleD").style.animationPlayState = "paused";
  document.querySelector(".imgD").style.animationPlayState = "paused";
  document.querySelector(".circleE").style.animationPlayState = "paused";
  document.querySelector(".imgE").style.animationPlayState = "paused";

  document.getElementById("youChoosePaper").style.display = "none";
  document.getElementById("youChooseScissor").style.display = "none";
  document.getElementById("youChooseRock").style.display = "none";
  document.getElementById("youChooseSpock").style.display = "none";
  document.getElementById("youChooseLizard").style.display = "none";

  document.getElementById("vs").style.display = "none";

  document.getElementById("comChoosePaper").style.display = "none";
  document.getElementById("comChooseScissor").style.display = "none";
  document.getElementById("comChooseRock").style.display = "none";
  document.getElementById("comChooseSpock").style.display = "none";
  document.getElementById("comChooseLizard").style.display = "none";

  document.getElementById("in-game").style.animationPlayState = "paused";

  document.getElementById("anime").classList.remove("animationyouwin");
  document.getElementById("anime").classList.remove("animationyoulose");

  function myFunction(x) {
    if (x.matches) {
       document.getElementById("rock").style.top = "50%";
        document.getElementById("scissor").style.top = "30%";
        document.getElementById("paper").style.top = "30%";
        document.getElementById("rock").style.left = "33%";
        document.getElementById("scissor").style.left = "58%";
        document.getElementById("paper").style.left = "8%";
    } else {
     document.getElementById("paper").style.top = "34%";
      document.getElementById("paper").style.left = "33%";
      document.getElementById("scissor").style.top = "34%";
      document.getElementById("scissor").style.left = "54.5%";
      document.getElementById("rock").style.top = "58%";
      document.getElementById("rock").style.left = "44%";
      }
    }

  var x = window.matchMedia("(max-width: 550px)");
  myFunction(x);
  x.addListener(myFunction);
});

/********************************************************************* */
document.getElementById("playbonus").addEventListener("click", () => {
  document.getElementById("in-game").style.display = "none";
  document.getElementById("alert").style.display = "none";
  document.getElementById("rule3").style.display = "none";
  document.getElementById("rule5").style.display = "block";
  document.querySelector(".img3").style.display = "none";
  document.querySelector(".img5").style.display = "block";
  document.querySelector(".pentagon").style.display = "block";

  document.getElementById("spock").style.display = "block";
  document.getElementById("lizard").style.display = "block";
  document.getElementById("rock").style.display = "block";
  document.getElementById("scissor").style.display = "block";
  document.getElementById("paper").style.display = "block";  

  document.getElementById("rock").style.animationPlayState = "paused";
  document.getElementById("scissor").style.animationPlayState = "paused";
  document.getElementById("paper").style.animationPlayState = "paused";
  document.getElementById("spock").style.animationPlayState = "paused";
  document.getElementById("lizard").style.animationPlayState = "paused";

  document.querySelector(".circleA").style.animationPlayState = "paused";
  document.querySelector(".imgA").style.animationPlayState = "paused";
  document.querySelector(".circleB").style.animationPlayState = "paused";
  document.querySelector(".imgB").style.animationPlayState = "paused";
  document.querySelector(".circleC").style.animationPlayState = "paused";
  document.querySelector(".imgC").style.animationPlayState = "paused";
  document.querySelector(".circleD").style.animationPlayState = "paused";
  document.querySelector(".imgD").style.animationPlayState = "paused";
  document.querySelector(".circleE").style.animationPlayState = "paused";
  document.querySelector(".imgE").style.animationPlayState = "paused";

  document.getElementById("youChoosePaper").style.display = "none";
  document.getElementById("youChooseScissor").style.display = "none";
  document.getElementById("youChooseRock").style.display = "none";
  document.getElementById("youChooseSpock").style.display = "none";
  document.getElementById("youChooseLizard").style.display = "none";

  document.getElementById("vs").style.display = "none";

  document.getElementById("comChoosePaper").style.display = "none";
  document.getElementById("comChooseScissor").style.display = "none";
  document.getElementById("comChooseRock").style.display = "none";
  document.getElementById("comChooseSpock").style.display = "none";
  document.getElementById("comChooseLizard").style.display = "none";

  document.getElementById("in-game").style.animationPlayState = "paused";

  document.getElementById("anime").classList.remove("animationyouwin");
  document.getElementById("anime").classList.remove("animationyoulose");

function myFunction(x) {
      if (x.matches) {
         document.getElementById("rock").style.top = "57%";
          document.getElementById("scissor").style.top = "24%";
          document.getElementById("paper").style.top = "37%";
          document.getElementById("rock").style.left = "56%";
          document.getElementById("scissor").style.left = "33%";
          document.getElementById("paper").style.left = "65%";
      } else {
          document.getElementById("rock").style.top = "68%";
          document.getElementById("scissor").style.top = "32%";
          document.getElementById("paper").style.top = "46%";
          document.getElementById("rock").style.left = "53%";
          document.getElementById("scissor").style.left = "44.5%";
          document.getElementById("paper").style.left = "57%";
        }
      }

    var x = window.matchMedia("(max-width: 550px)");
    myFunction(x);
    x.addListener(myFunction);
});


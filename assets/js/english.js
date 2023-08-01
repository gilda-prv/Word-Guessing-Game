//Word and Hints Object
const options = {
  python: "programming language",
  guitar: "a musical instrument",
  aim: "a purpose or intention",
  venus: "planet of our solar system",
  crypto: "related to cryptocurrency",
  tesla: "unit of magnetic flux density",
  mars: "planet of our solar system",
  html: "markup language for the web",
  server: "related to computer or system",
  joker: "psychological thriller film",
};

//Initial References
const message = document.getElementById("message");
const hintRef = document.querySelector(".hint-ref");
const controls = document.querySelector(".controls-container");
const startBtn = document.getElementById("start");
const letterContainer = document.getElementById("letter-container");
const userInpSection = document.getElementById("user-input-section");
const resultText = document.getElementById("result");
const word = document.getElementById("word");
const words = Object.keys(options);
let randomWord = "",
  randomHint = "";
let winCount = 0,
  lossCount = 0;

//Generate random value
const generateRandomValue = (array) => Math.floor(Math.random() * array.length);

//Block all the buttons
const blocker = () => {
  let lettersButtons = document.querySelectorAll(".letters");
  stopGame();
};

//Start Game

function chooseDif1() {
  window.location.href = "english.html";
}
function chooseDif2() {
  window.location.href = "english.html";
}
function chooseDif3() {
  window.location.href = "english.html";
}
startBtn.addEventListener("click", () => {
  controls.classList.add("hide");
  init();
});

//Stop Game
const stopGame = () => {
  controls.classList.remove("hide");
};

//Generate Word Function
const generateWord = () => {
  letterContainer.classList.remove("hide");
  userInpSection.innerText = "";
  randomWord = words[generateRandomValue(words)];
  randomHint = options[randomWord];
  hintRef.innerHTML = `<div id="wordHint">
    <span>Hint: </span>${randomHint}</div>`;
  let displayItem = "";
  randomWord.split("").forEach((value) => {
    displayItem += '<span class="inputSpace">_ </span>';
  });

  //Display each element as span
  userInpSection.innerHTML = displayItem;
  userInpSection.innerHTML += `<div id='chanceCount'>Guesses remaining: ${lossCount}</div>`;
};

//Initial Function
const init = () => {
  winCount = 0;
  lossCount = 5;
  randomWord = "";
  word.innerText = "";
  randomHint = "";
  message.innerText = "";
  userInpSection.innerHTML = "";
  letterContainer.classList.add("hide");
  letterContainer.innerHTML = "";
  generateWord();

  //For creating letter buttons
  for (let i = 65; i < 91; i++) {
    let button = document.createElement("button");
    button.classList.add("letters");

    //Number to ASCII[A-Z]
    button.innerText = String.fromCharCode(i);

    //Character button onclick
    button.addEventListener("click", () => {
      message.innerText = `correct word`;
      message.style.color = "#008000";
      message.style.marginTop = "18px";
      let charArray = randomWord.toUpperCase().split("");
      let inputSpace = document.getElementsByClassName("inputSpace");

      //If array contains clicked value replace the matched Dash with Letter
      if (charArray.includes(button.innerText)) {
        charArray.forEach((char, index) => {
          //If character in array is same as clicked button
          if (char === button.innerText) {
            button.classList.add("correct");
            //Replace dash with letter
            inputSpace[index].innerText = char;
            //increment counter
            winCount += 1;
            //If winCount equals word length
            if (winCount == charArray.length) {
              resultText.innerHTML = "you win";
              resultText.style.marginBottom = "20px";
              resultText.style.color = "#fff6a9";
              resultText.style.textShadow =
                "0 0 0 transparent, 0 0 10px #2695ff, 0 0 20px rgba(38, 149, 255, 0.5), 0 0 40px #2695ff, 0 0 100px #2695ff, 0 0 200px #2695ff, 0 0 300px #2695ff, 0 0 500px #2695ff";
              resultText.style.fontSize = "18px";
              startBtn.innerText = "restart";
              //block all buttons
              blocker();
            }
          }
        });
      } else {
        //lose count
        button.classList.add("incorrect");
        lossCount -= 1;
        document.getElementById(
          "chanceCount"
        ).innerText = `Guesses remaining: ${lossCount}`;
        message.innerText = `wrong word`;
        message.style.color = "#ff0000";
        message.style.marginTop = "15px";
        if (lossCount == 0) {
          word.innerHTML = `word: <span>${randomWord}</span>`;
          word.style.marginBottom = "20px";
          word.style.color = "#fff6a9";
          word.style.textShadow =
            "0 0 0 transparent, 0 0 10px #2695ff, 0 0 20px rgba(38, 149, 255, 0.5), 0 0 40px #2695ff, 0 0 100px #2695ff, 0 0 200px #2695ff, 0 0 300px #2695ff, 0 0 500px #2695ff";
          word.style.fontSize = "18px";
          resultText.innerHTML = "you lose";
          resultText.style.marginBottom = "20px";
          resultText.style.color = "#fff6a9";
          resultText.style.textShadow =
            "0 0 0 transparent, 0 0 10px #2695ff, 0 0 20px rgba(38, 149, 255, 0.5), 0 0 40px #2695ff, 0 0 100px #2695ff, 0 0 200px #2695ff, 0 0 300px #2695ff, 0 0 500px #2695ff";
          resultText.style.fontSize = "18px";
          blocker();
        }
      }

      //Disable clicked buttons
      button.disabled = true;
    });

    //Append generated buttons to the letters container
    letterContainer.appendChild(button);
  }
};

window.onload = () => {
  init();
};
